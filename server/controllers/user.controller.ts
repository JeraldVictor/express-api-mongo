import { ApiError } from "@/utils/ApiError";
import { ApiResponse } from "@/utils/ApiResponse";
import { asyncHandler } from "@/utils/asyncHandler.js";
import type { Request, Response } from "express";
import { User } from "@/db/models/user.model";
import { createUser } from "@/db/service/user.service";
import type { CreateUserInput } from "@/validators/user.validators";

export const createUserHandler = asyncHandler(
  async (req: Request<{}, {}, CreateUserInput["body"]>, res: Response) => {
    const { name, email, password } = req.body;

    const existedUser = await User.findOne({
      email,
    });

    if (existedUser) {
      throw new ApiError(409, "User with email already exists", []);
    }
    const user = await createUser({ name, email, password });

    return res
      .status(201)
      .json(new ApiResponse(200, user, "Users registered successfully."));
  }
);
