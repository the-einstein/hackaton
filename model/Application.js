const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  title: {},
  details: {},
  anonymouse: {},
  proofs: {},
  score: {},
  to: { type: Schema.Types.ObjectId, ref: "organ" },
  from: { type: Schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("Application", applicationSchema);
