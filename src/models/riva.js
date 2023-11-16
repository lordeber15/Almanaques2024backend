const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Riva = sequelize.define("riva", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  report: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = { Riva };
