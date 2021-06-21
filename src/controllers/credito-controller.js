const Credito = require("../database/models/credito.model");

class CreditoController {
  static getAll(callback) {
    Credito.find((err, doc) => {
      callback(doc);
    });
  }

  static get(req, res, next) {
    const { id } = req.body.id;
    Credito.find({ id: id }, (err, doc) => {
      res.send(doc);
    });
  }
}

module.exports = CreditoController;
