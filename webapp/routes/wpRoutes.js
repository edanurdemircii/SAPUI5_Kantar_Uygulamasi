const express = require("express");
const router = express.Router();
const { WeighingProcess } = require("../models/WeighingProcess");


router.post("/process", async (req, res) => {
  const {
    receipt_no,
    license_plate,
    registration_no,
    trailer_plate,
    firstname,
    lastname,
    identity,
    phone,
    driving_license,
    product_code,
    product_definition,
    title,
    address,
    tax_office,
    tax_number,
    first_weighing,
    last_weighing,
    net_weighing,
    entry_date,
    release_date,
    delivery_date,
    delivery_no,
  } = req.body;

  try {
    const newProcess = await WeighingProcess.create({
      receipt_no,
      license_plate,
      registration_no,
      trailer_plate,
      firstname,
      lastname,
      identity,
      phone,
      driving_license,
      product_code,
      product_definition,
      title,
      address,
      tax_office,
      tax_number,
      first_weighing,
      last_weighing,
      net_weighing,
      entry_date,
      release_date,
      delivery_date,
      delivery_no,
    });
    res.status(201).json(newProcess); // Başarılı kayıt yanıtı
  } catch (error) {
    console.error("Process kayıt hatası:", error);
    res.status(500).json({ error: "Process kayıt hatası" });
  }
});

module.exports = router;
