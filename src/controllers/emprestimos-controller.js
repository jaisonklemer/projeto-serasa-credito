const Emprestimo = require("../database/models/emprestimo.model");

class EmprestimosController {
  static getByUser({ userId }, callback) {
    Emprestimo.find({ user: userId }, (err, doc) => {
      callback(doc);
    });
  }
}

module.exports = EmprestimosController;
