const express = require('express');
const router = express.Router();
const { Vehicle } = require('../models/Vehicle'); // Vehicle modelini import edin

router.post("/vehicles", async (req, res) => {
    const { license_plate, registration_no,trailer_plate} = req.body;

    try {
        // Veritabanına kaydet
        const newVehicle = await Vehicle.create({
             license_plate,
             registration_no,
             trailer_plate,
        });
        res.status(201).json(newVehicle); // Başarılı kayıt yanıtı
    } catch (error) {
        console.error("Vehicle kayıt hatası:", error);
        res.status(500).json({ error: "Vehicle kayıt hatası" });
    }
});

module.exports = router;
