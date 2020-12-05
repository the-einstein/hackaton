const express = require("express");
const Application = require("../model/Application");
const auth = require("../verifyToken");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("ok");
});

router.post("/new", auth, async (req, res) => {
  const applct = new Application({
    title: req.body.title,
    details: req.body.details,
    to: req.body.to,
    from: req.body.from,
    score: req.body.score,
    proofs: req.body.proofs,
    anonymous: req.body.anonymous,
  });

  const tempApplct = await applct.save();

  res.send(tempApplct);
});

module.exports = router;
