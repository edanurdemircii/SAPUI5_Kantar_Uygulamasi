const express = require('express');
const router = express.Router();
const { Supplier } = require('../models/Supplier'); 


router.post("/suppliers", async (req, res) => {
    const { title, address,tax_office,tax_number} = req.body;

    try {
        // Veritabanına kaydet
        const newSupplier = await Supplier.create({
            title, 
            address,
            tax_office,
            tax_number,
        });
        res.status(201).json(newSupplier); // Başarılı kayıt yanıtı
    } catch (error) {
        console.error("Supplier kayıt hatası:", error);
        res.status(500).json({ error: "Supplier kayıt hatası" });
    }
});

module.exports = router;
