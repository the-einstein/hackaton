const express = require("express");
const User = require("../model/User");
const { registerValidate } = require("../validation/validate");

const router = express.Router();

router.get("/register", (req, res) => {
  res.send("register");
});

router.post("/register", async (req, res) => {
  //validate
  const { error } = registerValidate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  const userExists = await User.findOne({ passport: req.body.passport });
  if (userExists) return res.status(400).send({ error: "User exists" });

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

router.post("/login", async (req, res) => {
  const tempUser = await User.findOne({
    $or: [{ phone: req.body.phone }, { passport: req.body.passport }],
  });
  res.send(tempUser);
});

module.exports = router;
