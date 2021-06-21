const Credito = require("../models/Credito.model");
const Seeder = require("./seeder");

class CreditoSeeder extends Seeder {
  constructor() {
    super();
  }

  data() {
    var data = [
      {
        name: "Empréstimo Pessoal",
        description:
          "Crédito ideal para quem precisa reorganizar as finanças, realizar a reforma da casa, abrir o próprio negócio ou até mesmo realizar aquela viagem dos sonhos.",
        tax: 0.99,
      },
      {
        name: "Empréstimo Consignado",
        description:
          "Ótima opção para aposentados e pensionistas, ou servidores realizarem os seus sonhos. Trabalhamos com taxas personalizas que cabem no seu bolso",
        tax: 1.95,
      },
      {
        name: "Empréstimo para negativados",
        description:
          "Modelo de empréstimo que vai te ajudar a sair do vermelho e limpar o seu nome. Opções e taxas personalizadas que irão atender todos as suas necessidades.",
        tax: 2.5,
      },
    ];
    return data;
  }

  async beforeRun() {
    await Credito.deleteMany({});
  }

  async run() {
    await this.beforeRun();
    await Credito.create(this.data());
    console.log("Seed Complete");
    process.exit();
  }
}

module.exports = CreditoSeeder;
