const { Router } = require("express");
const UserController = require("../controllers/user-controller");
const passport = require("passport");
const EmprestimosController = require("../controllers/emprestimos-controller");
const Emprestimo = require("../database/models/emprestimo.model");
const RoutesHandler = require("../handlers/routes-handler");
const { isAuthenticated } = require("../controllers/auth-controller");

const route = Router();

route.get("/", RoutesHandler.handle);

route.get("/login", function (req, res, next) {
  var error = null;
  if (req.query.loginFail) {
    error = "Login ou senha inválidos";
  }
  CreditoController.getAll((credito) => {
    res.render("index", {
      message: { info: error, type: error ? "error" : "success" },
      user: req.user,
      creditos: credito || null,
    });
  });
});

route.post("/register", UserController.create);

route.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureMessage: "Usuário ou senha inválidos",
    successRedirect: "/",
    failureRedirect: "/login?loginFail=true",
  }),
  function (req, res, next) {
    res.redirect("/");
  }
);

route.post("/contratar", isAuthenticated, EmprestimosController.store);

route.get("/profile", isAuthenticated, (req, res, next) => {
  EmprestimosController.getByUser({ userId: req.user.id }, (emprestimos) => {
    var msg = {info: null};
    if(req.query.success){
      msg = {info: 'Contrato realizado com sucesso!', type: 'success'}
    }
    res.render("pages/profile", {
      user: req.user,
      emprestimos: emprestimos || null,
      message: msg
    });
  });
});

module.exports = route;
