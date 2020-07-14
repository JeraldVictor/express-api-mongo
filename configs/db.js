const mongoose = require("mongoose");
const users = require("./models/users");
const { db } = require("./index");

mongoose.connect(
  db,
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB Connected");
  }
);

module.exports = { users };
