// const { DataTypes } = require('sequelize');
// const sequelize = require('../db');

// //Kantar İşlemleri
// const WeighingProcess = sequelize.define('WeighingProcess', {
//     receipt_no: { //fiş numarası
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     },
//     vehicle_id: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'vehicles', 
//             key: 'id'
//         }
//     },
//     driver_id: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'drivers', 
//             key: 'id'
//         }
//     },
//     product_id: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'products', 
//             key: 'id'
//         }
//     },
//     supplier_id: { //tedarikçi
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'suppliers', 
//             key: 'id'
//         }
//     },
//     first_weighing: {
//         type: DataTypes.FLOAT,
//     },
//     last_weighing: {
//         type: DataTypes.FLOAT,
//     },
//     net_weighing: {
//         type: DataTypes.FLOAT,
//     },
//     entry_date: {
//         type: DataTypes.DATE,
//     },
//     release_date: {
//         type: DataTypes.DATE,
//     },
//     delivery_date: { //irsaliye
//         type: DataTypes.DATE,
//     },
//     delivery_no: {
//         type: DataTypes.STRING
//     }
// });

// module.exports = WeighingProcess;
