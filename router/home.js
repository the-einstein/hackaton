const express = require("express");

const router = express.Router();

router.get("/next", (req, res) => {
  res.send("/ route");
});

router.get("/", (req, res) => {
  res.send("/ next");
});

module.exports = router;
