const server = require("./config");
const PORT = process.env.PORT || 5000;

class Initializer {
  init() {
    this._database();
    this._server();
  }

  _server() {
    server.listen(PORT, () => {
      console.log(`Servidor iniciado na porta ${PORT}`);
    });
  }

  _database() {
    require("../database/db");
  }
}

module.exports = Initializer;
