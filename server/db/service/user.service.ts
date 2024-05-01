import { User, type UserInput } from "@/db/models/user.model";
import { omit } from "lodash";

export const createUser = async (newUser: UserInput) => {
  const user = await User.create(newUser);

  return omit(user.toJSON(), "password");
};
