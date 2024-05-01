import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "@/config";

export interface IUser {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}
export interface UserInput {
  name: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("save", async function (next) {
  let user = this as IUser;

  // only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(config.PASSWORD_SALT);
  const hash = bcrypt.hashSync(user.password, salt);
  this.password = hash;

  return next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  let user = this as IUser;

  return await bcrypt
    .compare(candidatePassword, user.password)
    .catch((e) => false);
};

export const User = mongoose.model<IUser>("User", userSchema);
