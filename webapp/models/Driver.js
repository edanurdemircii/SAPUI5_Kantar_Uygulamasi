const { DataTypes } = require('sequelize');
const sequelize = require('../db'); 

const Driver = sequelize.define('Driver', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    identity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    driving_license: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Driver; 
