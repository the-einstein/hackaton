const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {},
    phone: {},
    passport: {},
    password: {},
    role: {},
    organ: {
      type: Schema.Types.ObjectId,
      ref: "organ",
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("User", userSchema);
