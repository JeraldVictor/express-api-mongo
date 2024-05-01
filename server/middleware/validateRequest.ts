import { ApiError } from "@/utils/ApiError";
import { ApiResponse } from "@/utils/ApiResponse";
import log from "@/utils/logger";
import type { Request, Response, NextFunction } from "express";
import type { AnyZodObject } from "zod";

export const validateSchema =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
        headers: req.headers,
      });
      next();
    } catch (error: any) {
      console.log(error);
      // log.error(error);
      return res
        .status(400)
        .json(new ApiError(400, error.message, error.errors));
    }
  };
