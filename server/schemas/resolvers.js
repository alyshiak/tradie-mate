const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { Tradesperson } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('');
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id });
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    tradies: async () => {
      return Tradesperson.find();
    },

    tradie: async (parent, { tradieId }) => {
      return Tradesperson.findOne({ _id: tradieId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    addTradie: async (parent, { name, trade, location, email, phone }) => {
      const tradie = await Tradesperson.create({ name, trade, location, email, phone });

      await User.findOneAndUpdate(
        { username: name },
        { $addToSet: { tradies: tradie._id } }
      );

      return tradie;
    },
    addComment: async (parent, { tradieId, commentText }, context) => {
      if (context.user) {
        return Tradesperson.findOneAndUpdate(
          { _id: tradieId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { tradieId, commentId }, context) => {
      if (context.user) {
        return Tradesperson.findOneAndUpdate(
          { _id: tradieId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
 },
 };

module.exports = resolvers;
