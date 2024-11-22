const Vehicle = require('../models/Vehicle');

// Tüm driver'ları getir
const getAllVehicle= async (req, res) => {
    try {
        const vehicle = await Vehicle.findAll();
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const createVehicle = async (req, res) => {
    try {
        const { license_plate, registration_no, trailer_plate} = req.body;
        const vehicle = await Vehicle.create({ license_plate, registration_no, trailer_plate });
        res.status(201).json(vehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




module.exports = { getAllVehicle,createVehicle};
