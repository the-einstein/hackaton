const express = require("express");
const Organ = require("../model/Organ");
const User = require("./user");
const auth = require("../verifyToken");

const router = express.Router();

router.get("/", async (req, res) => {
  const organs = await Organ.find();
  res.send(organs);
});

router.post("/new", auth, async (req, res) => {
  res.send("ok");
});

module.exports = router;
