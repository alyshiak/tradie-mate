const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");
require('mongoose-type-email');

// const favouriteSchema = new Schema({
//   favouriteId: {
//     type: mongoose.ObjectId,
//   },
//   favourite: {
//     type: Boolean,
//   },
// });

const tradespersonSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max_length: 50,
      min_length: 1,
      trim: true,
    },
    trade: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
    type: String,
     required: true,
     trim: true,
    },
    phone: {
    type: String,
    required: true,
    trim: true,
    },
    email: {
    type: mongoose.SchemaTypes.Email,
    required: true,
    trim: true,
    },
    tradieCreator: {
      type: String,
      trim: true,
    },

      comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],

    // favourite: [favouriteSchema],
  },
  {
    // toJSON: {
    //   virtuals: true,
    // },
  }
);

const Tradesperson = model('tradesperson', tradespersonSchema);

// tradespersonSchema.virtual('favouriteCount').get(function() {
//   return this.favourite.length;
// });

module.exports = Tradesperson;