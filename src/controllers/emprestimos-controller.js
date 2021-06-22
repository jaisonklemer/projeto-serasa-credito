const Emprestimo = require("../database/models/emprestimo.model");

class EmprestimosController {
  static getByUser({ userId }, callback) {
    console.log(userId);
    Emprestimo.find({ user: userId }, (err, doc) => {
      console.log(err);
      console.log(doc);
      callback(doc);
    });
  }
}

module.exports = EmprestimosController;
