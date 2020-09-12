// Creating our User model
var Sequelize = require("sequelize");
var sequelize = require("../CroolDBConnection.js");

const Insults = sequelize.define("Insults", {
  contents: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  intensity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn("NOW"),
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn("NOW"),
  },
});

Insults.sync();

module.exports = Insults;
