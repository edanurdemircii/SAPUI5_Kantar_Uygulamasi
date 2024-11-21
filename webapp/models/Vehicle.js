const { DataTypes } = require('sequelize');
const sequelize = require('../db'); 

const Vehicle = sequelize.define('Vehicle', {
    license_plate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    registration_no: {
        type: DataTypes.STRING,
        allowNull: false
    },
    trailer_plate: {
        type: DataTypes.STRING
    }
});

module.exports = Vehicle; 