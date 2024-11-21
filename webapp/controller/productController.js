const Product = require('../models/Product');
// Tüm product'ları getir
const getAllProduct = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Yeni product oluştur
const createProduct = async (req, res) => {
    try {
        const {product_code, product_definition } = req.body;
        const product = await Product.create({ product_code,product_definition });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Driver güncelle
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { product_code,product_definition  } = req.body;
        const product = await Product.update({ product_code,product_definition }, { where: { id } });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Driver sil
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.destroy({ where: { id } });
        res.status(200).send('Product deleted');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllProduct, createProduct, updateProduct, deleteProduct };
