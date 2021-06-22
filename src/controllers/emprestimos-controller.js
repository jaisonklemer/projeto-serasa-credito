const Emprestimo = require("../database/models/emprestimo.model");

class EmprestimosController {
  static getByUser({ userId }, callback) {
    Emprestimo.find({ user: userId }, (err, doc) => {
      callback(doc);
    });
  }

  static store(req, res, next){
    const { valueRange, taxa, valorParcela, creditoId, parcelas, name } = req.body;
    let emprestimo = new Emprestimo({
      idCredito: creditoId,
      valorEmprestimo: valueRange,
      qtdParcelas: parcelas,
      valorParcela: valorParcela,
      user: req.user.id,
      taxa: taxa,
      name: name
    });
  
    emprestimo.save().then(() => {
      res.redirect("/profile?success=true");
    });
  }
}

module.exports = EmprestimosController;
