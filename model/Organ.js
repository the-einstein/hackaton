const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const organSchema = new Schema({
  name: {},
  region: {},
  score: {},
  apps: {},
});

module.exports = mongoose.model("Organ", organSchema);
