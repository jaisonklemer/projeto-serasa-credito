const express = require("express");
const routes = require("../routes/routes.js");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(routes);

app.use("/public", express.static("public"));
app.set("views", "public/views");
app.set("view engine", "ejs");

app.use(function (req, res, next) {
  res.render("404");
});

module.exports = app;
