const Product = require('../models/Product');

const getProducts = async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
};

const getProductById = async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    res.json(product);
};

module.exports = { getProducts, getProductById };
