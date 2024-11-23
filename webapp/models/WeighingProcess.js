const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const WeighingProcess = sequelize.define('WeighingProcess', {
  receipt_no: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  license_plate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  registration_no: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trailer_plate: {
    type: DataTypes.STRING,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  identity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  driving_license: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_definition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  first_weighing: {
    type: DataTypes.FLOAT,
  },
  last_weighing: {
    type: DataTypes.FLOAT,
  },
  net_weighing: {
    type: DataTypes.FLOAT,
  },
  entry_date: {
    type: DataTypes.DATE,
  },
  release_date: {
    type: DataTypes.DATE,
  },
  delivery_date: {
    type: DataTypes.DATE,
  },
  delivery_no: {
    type: DataTypes.STRING,
  },

});

module.exports = WeighingProcess;

