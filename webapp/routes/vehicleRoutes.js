const express = require('express');
const router = express.Router();
const { Vehicle } = require('../models/Vehicle'); // Vehicle modelini import edin

// Tüm araçları listelemek
router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.findAll();
        res.json(vehicles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
