const mongoose = require("mongoose");

const organSchema = new mongoose.Schema({
  name: {},
  region: {},
  score: {},
  apps: {},
});

module.exports = mongoose.model("Organ", organSchema);
