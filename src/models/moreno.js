const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Moreno = sequelize.define("moreno", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ingreso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  monto: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
});

module.exports = { Moreno };
