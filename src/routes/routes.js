const { Router } = require("express");
const UserController = require("../controllers/user-controller");
const passport = require("passport");

const route = Router();

route.get("/", (req, res) => {
  console.log(req.user);
  res.render("index", { user: req.user });
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
    successRedirect: "/",
    failureRedirect: "/login?loginFail=true",
  }),
  function (req, res, next) {
    res.redirect("/");
  }
);

module.exports = route;
