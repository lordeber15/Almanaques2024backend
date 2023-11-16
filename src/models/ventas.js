const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Ventas = sequelize.define("venta", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  egreso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  monto: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
});

module.exports = { Ventas };
