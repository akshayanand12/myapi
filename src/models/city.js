const { sq } = require("../db");
const { DataTypes } = require("sequelize");

const City = sq.define("city", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  
    name: {
      type: DataTypes.TEXT,
    },
    
    countrycode: {
      type: DataTypes.CHAR(3),
    },
  
    district: {
      type: DataTypes.TEXT
    },

    population: {
        type: DataTypes.INTEGER
      },
  }, {
    freezeTableName: true,
    timestamps: false
  });

  City.sync().then(() => {
    console.log("City Model synced");
  });

  module.exports = City;