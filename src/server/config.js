const express = require("express");
const routes = require("../routes/routes.js");
const passport = require("passport");
var flash = require("connect-flash");
const session = require("express-session");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/public", express.static("public"));
app.set("views", "public/views");
app.set("view engine", "ejs");

require("../services/auth-service.js")(passport);

app.use(
  session({
    secret: "121186470fa2b47c5311357b06a31e16",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 60 * 1000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.get("*", function (req, res, next) {
  req.user = req.user || null;
  next();
});

app.use(routes);

app.use(function (req, res, next) {
  res.render("404", { user: req.user });
});

module.exports = app;
