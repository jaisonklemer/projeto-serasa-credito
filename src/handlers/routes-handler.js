const CreditoController = require("../controllers/credito-controller");

class RoutesHandler {
  static handle(req, res, next) {
    var msg = { type: "error" };

    if (req.query.loginFail) {
      msg.info = "Login ou Senha inválidos";
    }
    if (req.query.registerFail) {
      msg.info = "Usuário já existe no sistema!";
    }

    if (req.query.loginRequired) {
      msg.info = "Você deve fazer login antes!";
      msg.type = "attention";
    }

    CreditoController.getAll((credito) => {
      res.render("index", {
        user: req.user,
        message: msg,
        creditos: credito || null,
      });
    });
  }
}

module.exports = RoutesHandler;
