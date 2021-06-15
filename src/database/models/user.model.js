const bcrypt = require("bcryptjs");
var mongoose = require("mongoose");
const unique = require("uniqid");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { unique: true, type: String },
    password: { type: String, select: false },
    id: String,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  this.id = unique();
  next();
});

module.exports = mongoose.model("User", userSchema);
