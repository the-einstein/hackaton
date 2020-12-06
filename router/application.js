const express = require("express");
const Application = require("../model/Application");
const auth = require("../verifyToken");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("ok");
});

router.get("/all", auth, (req, res) => {
  console.log(req.user);
  res.send(req.user);
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
