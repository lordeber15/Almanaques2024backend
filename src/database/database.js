const Sequelize = require("sequelize");
// const { URL_BD } = process.env;

const sequelize = new Sequelize(
  "postgres://postgres:123456@localhost:5432/almanaques2024"
);

module.exports = sequelize;
