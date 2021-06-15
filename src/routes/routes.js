const { Router } = require("express");
const UserController = require("../controllers/user-controller");
const passport = require("passport");

const route = Router();

route.get("/", (req, res) => {
  res.render("index");
});

route.get("/login", function (req, res, next) {
  var error = null;
  if (req.query.loginFail) {
    error = "Login ou senha inválidos";
  }
  res.render("index", { error: error, user: req.user });
});

route.post("/register", UserController.create);

route.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureMessage: "Usuário ou senha inválidos",
    successRedirect: "/profile",
    failureRedirect: "/login?loginFail=true",
  }),
  function (req, res, next) {
    res.redirect("/profile");
  }
);

module.exports = route;
