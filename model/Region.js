const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const regionSchema = new Schema({
  region: {},
  districts: {},
});

module.exports = mongoose.model("Region", regionSchema);
