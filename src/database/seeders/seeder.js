class Seeder {
  constructor() {
    require("../db");
  }

  async beforeRun() {
    return true;
  }

  data() {
    return true;
  }

  async run() {
    return true;
  }
}

module.exports = Seeder;
