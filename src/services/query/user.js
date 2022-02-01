import User from "../../models/user";
import { errorResponse } from "../../utilities/response-builder";

export const createUser = async (data) => {
  const user = new User(data);
  await user.save();
  return user;
};
