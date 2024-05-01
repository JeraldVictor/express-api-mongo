import { object, string, type TypeOf } from "zod";

export const createUserValidator = object({
  body: object({
    name: string({
      required_error: "name is required",
    }),
    password: string({
      required_error: "password is required",
    }).min(6, "password should be at least 6 characters"),
    confirmPassword: string({
      required_error: "password is required",
    }).min(6, "password should be at least 6 characters"),
    email: string({
      required_error: "email is required",
    }).email("not a valid email address"),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["passwordConfirmation"],
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserValidator>,
  "body.passwordConfirmation"
>;
