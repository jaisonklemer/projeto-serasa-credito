var mongoose = require("mongoose");
const uniqid = require("uniqid");

const emprestimoSchema = new mongoose.Schema(
  {
    id: String,
    idCredito: String,
    user: String,
    valorEmprestimo: Number,
    valorParcela: Number,
    qtdParcelas: Number,
    taxa: Number,
  },
  {
    timestamps: true,
  }
);

emprestimoSchema.pre("save", async function (next) {
  this.id = uniqid();
  next();
});

module.exports = mongoose.model("Emprestimo", emprestimoSchema);
