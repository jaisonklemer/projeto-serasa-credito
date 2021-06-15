const User = require("../database/models/user.model");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.email);
  });

  passport.deserializeUser(function (email, done) {
    User.findOne({ email: email }, function (err, user) {
      done(err, user);
    });
  });

  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      function (email, password, done) {
        User.findOne({ email: email }, function (err, user) {
          if (!user) {
            return done(null, false, { message: "Usuário não existe" });
          }
          bcrypt.compare(password, user.password, function (err, isMatch) {
            if (err) return done(err);
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Senha inválida" });
            }
          });
        }).select("+password");
      }
    )
  );
};
