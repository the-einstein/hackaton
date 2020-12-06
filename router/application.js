const express = require("express");
const Application = require("../model/Application");
const User = require("../model/User");
const auth = require("../verifyToken");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("ok");
});

router.get("/all", auth, async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  const apps = await Application.find({ to: user.organ });
  res.send(apps);
});

router.post("/new", auth, async (req, res) => {
  const applct = new Application({
    title: req.body.title,
    details: req.body.details,
    to: req.body.to,
    from: req.user._id,
    score: req.body.score,
    proofs: req.body.proofs,
    anonymous: req.body.anonymous,
  });

  const tempApplct = await applct.save();

  res.send(tempApplct);
});

module.exports = router;
