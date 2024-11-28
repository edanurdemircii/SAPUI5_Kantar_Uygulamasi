const { Sequelize } = require('sequelize');
const dbConfig = require('../webapp/config'); 

//tabloları olustuuyoruz.
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: "localhost",
    dialect:"mysql",
    port: dbConfig.port,
});

module.exports = sequelize; 