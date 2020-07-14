const express = require("express");
const app = express.Router();
const logger = require("../configs/logger");
const { users } = require("../db");

app.get("/", async (req, res) => {
  try {
    let usersList = users.find({});
    console.log(usersList);
    res.status(200).json({
      statusCode: 200,
      message: "",
    });
  } catch (error) {
    logger.Error(error.message);
    res.status(500).json({
      statusCode: 500,
      message: error.message,
    });
  }
});
module.exports = app;
