const Credito = require("../database/models/credito.model");

class CreditoController {
  static getAll(callback) {
    Credito.find((err, doc) => {
      callback(doc);
    });
  }
}

module.exports = CreditoController;
