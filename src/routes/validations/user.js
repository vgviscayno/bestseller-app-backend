import { Joi } from "express-validation";

export const createUser = {
  body: Joi.object({
    name: Joi.object({
      first: Joi.string().required(),
      last: Joi.string().required(),
    }).required(),
  }),
};
