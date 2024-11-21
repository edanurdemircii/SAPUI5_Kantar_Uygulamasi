const express = require("express");
const Product = require("../models/Product"); // Sequelize modeli
const router = express.Router();

// Yeni bir sürücü kaydet
router.post("/products", async (req, res) => {
    const { product_code, product_definition} = req.body;

    try {
        // Veritabanına kaydet
        const newProduct = await Product.create({
            product_code,
            product_definition
        });
        res.status(201).json(newProduct); // Başarılı kayıt yanıtı
    } catch (error) {
        console.error("Product kayıt hatası:", error);
        res.status(500).json({ error: "Product kayıt hatası" });
    }
});

module.exports = router;
