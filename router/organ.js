const express = require("express");
const Organ = require("../model/Organ");
const User = require("../model/User");
const App = require("../model/Application");
const Region = require("../model/Region");
const auth = require("../verifyToken");

const router = express.Router();

router.get("/", async (req, res) => {
  //TODO: refactor code to make it work with aggregate function to optimize it
  // const organs = await Organ.aggregate([
  //   {
  //     $lookup: {
  //       from: "application",
  //       localField: "_id",
  //       foreignField: "to",
  //       as: "score",
  //     },
  //   },
  // ]);
  const organs = await Organ.find();
  for (organ in organs) {
    let scores = await App.find({ to: organs[organ]._id });
    let sumScore = 0;
    let midScore = 0;
    for (score in scores) {
      sumScore = sumScore + scores[score].score;
    }
    midScore = sumScore / scores.length;
    organs[organ].score = midScore;
  }
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
