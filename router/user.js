const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
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

  //check user existanse
  const userExists = await User.findOne({ passport: req.body.passport });
  if (userExists) return res.status(400).send({ error: "User exists" });

  //HASH  THE PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    passport: req.body.passport,
    password: hashPassword,
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
  console.log(req.body);
  const tempUser = await User.findOne({
    $or: [{ phone: req.body.phone }, { passport: req.body.passport }],
  });
  if (!tempUser) return res.status(400).send({ error: "User does not exist" });

  //compare passwords
  const validPas = await bcrypt.compare(req.body.password, tempUser.password);
  if (!validPas) return res.status(400).send({ error: "wrong password" });

  //assign token
  const token = jwt.sign({ _id: tempUser._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send({ token: token });
});

module.exports = router;
