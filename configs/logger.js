const logger = require("node-express-logger");
logger.config({
  logFilePath: "./logs/",
  logFileName: "logfile.log",
});

module.exports = logger;

// logger.Info("123123");
// logger.Debug("123123")
// logger.Warn("123123")
// logger.Error("123123")
// logger.Trace("123123")
