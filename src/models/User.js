import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { Joi } from "express-validation";
import { validations } from "../utilities/constants";

//bcrypt config
const saltRounds = 10;

const { name, phoneNumber, password } = validations;

const userSchema = new mongoose.Schema(
  {
    name: {
      first: {
        type: String,
        required: true,
        trim: true,
        match: [name.regex, name.message],
      },
      last: {
        type: String,
        required: true,
        trim: true,
        match: [name.regex, name.message],
      },
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      // unique: true,
      match: [phoneNumber.regex, phoneNumber.message],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      // unique: true,
      validate(value) {
        const { error } = Joi.string().email().validate(value);
        if (error) {
          throw new Error(error);
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      match: [password.regex, password.message],
    },
  },
  {
    timestamps: true,
    id: false,
  }
);

userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

//Hash the plain text password before saving
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, saltRounds);
  }

  next();
});

userSchema.virtual("addresses", {
  ref: "Address",
  localField: "_id",
  foreignField: "owner",
});

userSchema.virtual("fullName").get(function () {
  return `${this.name.first} ${this.name.last}`;
});

userSchema.set("toJSON", { virtuals: true });
userSchema.set("toObject", { virtuals: true });

const User = mongoose.model("User", userSchema);

export default User;
