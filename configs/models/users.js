//! models and schema design for user.
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email Id is required"],
  },
  password: {
    type: String,
  },
  phone: {
    type: Number,
    unique: true,
  },
  gender: {
    type: String,
    trim: true,
    lowercase: true,
  },
  address: {
    type: String,
    trim: true,
    lowercase: true,
  },
  dob: {
    type: String,
    trim: true,
  },
  timestamp: { type: Date, default: Date.now },
  lastLogin: { type: Date },
});

module.exports = new model("users", userSchema);
