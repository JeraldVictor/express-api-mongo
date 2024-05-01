import mongoose from "mongoose";
import config from "@/config";
import log from "@/utils/logger";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${config.MONGODB_URI}`);

    log.info(
      `MongoDB Connected! DB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    log.error("MongoDB connection error: ", error);
    process.exit(1);
  }
};

export default connectDB;
