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
    },
    trade: {
      type: String,
      required: true,
    },
    location: {
    type: String,
     required: true,
    },
    phone: {
    type: String,
    required: true,
    },
    email: {
    type: mongoose.SchemaTypes.Email,
    required: true,
    }

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