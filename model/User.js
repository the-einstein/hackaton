const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {},
    phone: {},
    passport: {},
    password: {},
    role: {},
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("User", userSchema);
