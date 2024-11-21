const express = require("express");
const Driver = require("../models/Driver"); // Sequelize modeli
const router = express.Router();

// Yeni bir sürücü kaydet
router.post("/drivers", async (req, res) => {
    const { firstname, lastname, identity, phone, driving_license } = req.body;

    try {
        // Veritabanına kaydet
        const newDriver = await Driver.create({
            firstname,
            lastname,
            identity,
            phone,
            driving_license
        });
        res.status(201).json(newDriver); // Başarılı kayıt yanıtı
    } catch (error) {
        console.error("Driver kayıt hatası:", error);
        res.status(500).json({ error: "Driver kayıt hatası" });
    }
});

module.exports = router;
