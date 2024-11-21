const express = require('express');
const router = express.Router();
const { Supplier } = require('../models/Supplier'); // Vehicle modelini import edin


router.get('/', async (req, res) => {
    try{
        const suppliers = await Supplier.Supplier.findAll();
        res.json(suppliers);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
} );

module.exports = router;
