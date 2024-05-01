import { ApiError } from "@/utils/ApiError";
import { ApiResponse } from "@/utils/ApiResponse";
import type { Request, Response, NextFunction } from "express";

export const homePage = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json(new ApiResponse(200, {}, "Home Page"));
};
export const pageNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  throw new ApiError(404, "Page not found");
};
