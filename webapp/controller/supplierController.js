const Suppllier = require('../models/Supplier');

// Tüm driver'ları getir
const getAllSupplier= async (req, res) => {
    try {
        const supplier = await Suppllier.findAll();
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const createSupplier = async (req, res) => {
    try {
        const { title, address, tax_office, tax_number } = req.body;
        const supplier = await Suppllier.create({ title, address, tax_office, tax_number });
        res.status(201).json(supplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




module.exports = { getAllSupplier,createSupplier};
