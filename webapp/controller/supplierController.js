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
const updateSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const { 
            title,
            address,
            tax_office,
            tax_number,
           } = req.body;
        const [updated] = await Suppllier.update(
            {
                title,
                address,
                tax_office,
                tax_number,
                },
            { where: { id } }
        );
        if (updated) {
            const updatedData = await Suppllier.findByPk(id);
            res.status(200).json(updatedData);
        } else {
            res.status(404).json({ error: "Data not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




module.exports = {updateSupplier, getAllSupplier,createSupplier};
