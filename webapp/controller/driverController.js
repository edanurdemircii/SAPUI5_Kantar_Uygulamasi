const Driver = require('../models/Driver');

// Tüm driver'ları getir
const getAllDrivers = async (req, res) => {
    try {
        const drivers = await Driver.findAll();
        res.status(200).json(drivers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Yeni driver oluştur
const createDriver = async (req, res) => {
    try {
        const { firstname, lastname, identity, phone, driving_license } = req.body;
        const driver = await Driver.create({ firstname, lastname, identity, phone, driving_license });
        res.status(201).json(driver);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Driver güncelle
const updateDriver = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstname, lastname, identity, phone, driving_license } = req.body;
        const [updated] = await Driver.update(
            { firstname, lastname, identity, phone, driving_license },
            { where: { id } }
        );
        if (updated) {
            const updatedDriver = await Driver.findByPk(id);
            res.status(200).json(updatedDriver);
        } else {
            res.status(404).json({ error: "Driver not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Driver sil
const deleteDriver = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Driver.destroy({ where: { id } });
        if (deleted) {
            res.status(200).send("Driver deleted");
        } else {
            res.status(404).json({ error: "Driver not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllDrivers, createDriver, updateDriver, deleteDriver };
