import { Joi } from "express-validation";

import { validations } from "../../utilities/constants";

export const createUser = {
  body: Joi.object({
    name: Joi.object({
      first: Joi.string().regex(validations.name.regex).required().messages({
        "string.pattern.base": validations.name.message,
      }),
      last: Joi.string().regex(validations.name.regex).required().messages({
        "string.pattern.base": validations.name.message,
      }),
    }).required(),
    phoneNumber: Joi.string()
      .regex(validations.phoneNumber.regex)
      .required()
      .messages({
        "string.pattern.base": validations.phoneNumber.message,
      }),
    email: Joi.string().email().required(),
    password: Joi.string()
      .regex(validations.password.regex)
      .required()
      .messages({
        "string.pattern.base": validations.password.message,
      }),
  }),
};
