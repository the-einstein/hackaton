const Joi = require("@hapi/joi");

const registerValidate = (data) => {
  const userSchema = Joi.object({
    name: Joi.string().min(5).required(),
    phone: Joi.string().min(9).required(),
    password: Joi.string().min(8).max(25).required(),
    passport: Joi.string().min(9).required(),
    organ: Joi.string().min(6),
  });

  return userSchema.validate(data);
};

const loginValidate = (data) => {
  const loginSchema = Joi.object({
    phone: Joi.string().min(9),
    password: Joi.string().min(8).max(25).required(),
    passport: Joi.string().min(9),
  });

  return loginSchema.validate(data);
};

module.exports.registerValidate = registerValidate;
module.exports.loginValidate = loginValidate;
