const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Riva = sequelize.define("riva", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Riva };
