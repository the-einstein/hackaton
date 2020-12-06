const express = require("express");
const Organ = require("../model/Organ");
const User = require("../model/User");
const Region = require("../model/Region");
const auth = require("../verifyToken");

const router = express.Router();

router.get("/", async (req, res) => {
  const organs = await Organ.find();
  res.send(organs);
});

router.post("/new", auth, async (req, res) => {
  res.send("ok");
});

router.get("/regions", async (req, res) => {
  const regi = await Region.find();
  res.send(regi);
});

module.exports = router;
