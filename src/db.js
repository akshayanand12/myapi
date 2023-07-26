const { Sequelize } = require("sequelize");

// Connection parameters
const sequelize = new Sequelize(`postgres://read_write_user@localhost:5432/world`);

const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  
  module.exports = { sq: sequelize, testDbConnection };
