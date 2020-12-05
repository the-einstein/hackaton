const express = require("express");
const User = require("../model/User");
const Joi = require("@hapi/joi");

const router = express.Router();

//validation

const userSchema = Joi.object({
  name: Joi.string().min(5).required(),
  phone: Joi.string().min(9).required(),
  password: Joi.string().min(8).max(25).required(),
  passport: Joi.string().min(9).required(),
});

router.get("/register", (req, res) => {
  res.send("register");
});

router.post("/register", async (req, res) => {
  //validate
  const { error } = userSchema.validate(req.body);
  if (error) res.send(error.details[0].message);

  const user = new User({
    name: req.body.name,
    passport: req.body.passport,
    password: req.body.password,
    phone: req.body.phone,
  });

  try {
    const newUser = await user.save();
    res.send(newUser);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
