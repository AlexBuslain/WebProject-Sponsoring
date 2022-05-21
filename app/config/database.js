const Sequelize = require("sequelize");
module.exports = new Sequelize("upsport", "postgres","1234", {
    host: "localhost",
    dialect: "postgres",
    port: 5000,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});