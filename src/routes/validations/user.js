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

export const loginUser = {
  body: Joi.object({
    username: Joi.alternatives()
      .try(
        Joi.string().email().required(),
        Joi.string().regex(validations.phoneNumber.regex).required().messages({
          "string.pattern.base": validations.phoneNumber.message,
        })
      )
      .required()
      .messages({
        "alternatives.match": '"username" must be an email or a phone number',
      }),
    password: Joi.string().required(),
  }),
};
