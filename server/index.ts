import express from "express";
import config from "@/config/index.js";
import connectDB from "./db";
import logger from "pino-http";
import pino from "pino";
import log from "./utils/logger";
import path from "path";
import routes from "./routes";
import errorHandler from "./middleware/error.middlewares.js";

const app = express();
app.use(
  logger({
    logger: pino(
      {},
      pino.destination(
        path.join(path.resolve(__dirname, "../"), "logs", "log.log")
      )
    ),
  })
);

app.use(express.json());

const PORT = config.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    log.info(`Server is Running on port ${PORT}`);

    routes(app);

    // common error handling middleware
    app.use(errorHandler);
  });
});
