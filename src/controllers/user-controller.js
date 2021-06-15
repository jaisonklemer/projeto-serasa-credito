const User = require("../database/models/user.model");

class UserController {
  static create(req, res, next) {
    const { name, email, password } = req.body;

    var user = User.find({ email: email });

    if (!user) {
      let user = new User({
        name: name,
        email: email,
        password: password,
      });

      user
        .save()
        .then(callback)
        .catch((error) => {
          throw new Error(error);
        });
    } else {
      var info = { error: "Usuário já existe" };
      res.send(info);
    }
  }
}

module.exports = UserController;
