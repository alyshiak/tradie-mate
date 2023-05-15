const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    tradie: [Tradesperson]!

  }
  type Tradesperson {
    _id: ID
    name: String
    trade: String
    location: String
    phone: String
    email: String
    tradieCreator: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(email: String!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    tradies: [Tradesperson]!
    tradie(tradieId: ID!): Tradesperson
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTradie(name: String!, trade: String!, location:String!, email:String!, phone: String!, tradieCreator: String!): Tradesperson
    removeTradie(tradieId: ID!): Tradesperson
    addComment(tradieId: ID!, commentText: String!): Tradesperson
    removeComment(tradieId: ID!, commentId: ID!): Tradesperson
  }

`;

module.exports = typeDefs;