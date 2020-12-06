const express = require("express");
const Organ = require("../model/Organ");
const User = require("../model/User");
const Region = require("../model/Region");
const auth = require("../verifyToken");

const router = express.Router();

router.get("/", async (req, res) => {
  const organs = await Organ.aggregate([
    {
      $lookup: {
        from: "application",
        localField: "_id",
        foreignField: "to",
        as: score,
      },
    },
  ]);
  console.log(organs);
  res.send(organs);
});

router.post("/new", auth, async (req, res) => {
  const tempOrgan = new Organ({
    name: req.body.name,
    region: req.body.region,
  });
  const organ = await tempOrgan.save();
  res.send(organ);
});

router.get("/regions", async (req, res) => {
  const regi = await Region.find();
  res.send(regi);
});

module.exports = router;
