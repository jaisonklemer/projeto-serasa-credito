var mongoose = require("mongoose");
const uniqid = require("uniqid");

const creditoSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    description: String,
    tax: Number,
  },
  {
    timestamps: true,
  }
);

creditoSchema.pre("save", async function (next) {
  this.id = uniqid();
  next();
});

module.exports = mongoose.model("Credito", creditoSchema);
