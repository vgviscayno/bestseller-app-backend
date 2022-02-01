import { Router } from "express";
import { validate } from "express-validation";

import * as userController from "../controllers/user";
import * as userValidation from "./validations/user";

const router = new Router();
const keyByField = true;

router.post(
  "/users",
  validate(userValidation.createUser, { keyByField }),
  userController.createUser
);

router.post(
  "/users/login",
  validate(userValidation.loginUser, { keyByField }),
  userController.loginUser
);

export default router;
