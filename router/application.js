const express = require("express");
const Application = require("../model/Organ");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("ok");
});

router.post("/new", async (req, res) => {
  const applct = new Application({
    title: req.body.title,
    detaila: req.body.details,
    to: req.body.to,
    from: req.body.from,
    score: req.body.score,
    proofs: req.body.proofs,
    anonymous: req.body.anonymous,
  });
});

module.exports = router;
