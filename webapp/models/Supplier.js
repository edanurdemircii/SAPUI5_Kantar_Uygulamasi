const { DataTypes } = require('sequelize');
const sequelize = require('../db'); 

const Suppllier = sequelize.define('Suppllier', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tax_office: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tax_number: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Suppllier; 
