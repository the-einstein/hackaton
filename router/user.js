const express = require("express");
const User = require("../model/User");
const Joi = require("@hapi/joi");

const router = express.Router();

//validation

// const userSchema = {
//     name: Joi.string().min(5).required(),
//     phone: Joi.string().min(9).max(9).required(),
//     password: Joi.string().mimn(8).max(25).required()
// }

router.get("/register", (req, res) => {
  res.send("register");
});

router.post("/register", async (req, res) => {
  //validate
  const { error } = Joi.validate(req.body, userSchema);
  if (error) res.send(error.details[0].message);

  const user = new User({
    name: req.body.name,
    passport: req.body.passport,
    password: req.body.passport,
  });

  try {
    const newUser = await user.save;
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
