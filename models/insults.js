// Creating our User model
var Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
  const Insults = sequelize.define("Insults", {
    contents: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    intensity: {
      type: DataTypes.INTEGER,
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

  return Insults;
};
