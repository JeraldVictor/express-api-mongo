import type { Express } from "express";
import { ApiResponse } from "@/utils/ApiResponse";
import { homePage } from "@/controllers";
import userRoutes from "./user.routes";

export default (app: Express) => {
  app.get("/", homePage);
  app.use("/user", userRoutes);

  app.use("*", (req, res) => {
    return res
      .status(404)
      .json(
        new ApiResponse(
          404,
          "Route Not Found",
          "Route Not Found, Please check the URL"
        )
      );
  });
};
