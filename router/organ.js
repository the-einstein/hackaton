const express = require("express");
const Organ = require("../model/Organ");

const router = express.Router();

router.get("/", async (req, res) => {
  const organs = await Organ.find();
  res.send(organs);
});

module.exports = router;
