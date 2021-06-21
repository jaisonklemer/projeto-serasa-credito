const User = require("../database/models/user.model");

class UserController {
  static create(req, res, next) {
    const { name, email, password } = req.body;

    User.findOne({ email: email }).then((user) => {
      if (user) {
        return res.redirect("/?registerFail=true");
      }

      var newUser = new User({ name: name, email: email, password: password });

      newUser.save().then(() => {
        return res.redirect("/");
      });
    });
  }
}

module.exports = UserController;
