import { createUserHandler } from "@/controllers/user.controller";
import { validateSchema } from "@/middleware/validateRequest";
import { createUserValidator } from "@/validators/user.validators";
import { Router } from "express";

const userRoutes = Router();

userRoutes
  .route("/")
  .post(validateSchema(createUserValidator), createUserHandler);

export default userRoutes;
