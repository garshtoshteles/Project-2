const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var Insults = sequelize.define("Insults", {
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
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn("NOW"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn("NOW"),
    },
  });
  return Insults;
};
