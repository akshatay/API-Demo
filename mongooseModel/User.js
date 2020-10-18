let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let userSchema = new Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    city: {
      type: String,
    },
    seq: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = userSchema;
