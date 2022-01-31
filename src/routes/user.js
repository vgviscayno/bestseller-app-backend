import { Router } from "express";
import { validate } from "express-validation";

import * as userController from "../controllers/user";
import * as userValidation from "./validations/user";

const router = new Router();
const keyByField = true;

router.post(
  "/user",
  validate(userValidation.createUser, { keyByField }),
  userController.createUser
);

export default router;
