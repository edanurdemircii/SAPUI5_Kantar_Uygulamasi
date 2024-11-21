const { DataTypes } = require('sequelize');
const sequelize = require('../db'); 

const Product = sequelize.define('Product', {
    product_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_definition: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Product; 
