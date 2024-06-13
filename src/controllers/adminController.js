const Product = require('../models/Product');
const User = require('../models/User');

const addProduct = async (req, res) => {
    const { name, price, description, stock } = req.body;
    try {
        const product = await Product.create({ name, price, description, stock });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: 'Add product failed' });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, description, stock } = req.body;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        product.name = name;
        product.price = price;
        product.description = description;
        product.stock = stock;
        await product.save();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Update product failed' });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        await product.destroy();
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Delete product failed' });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Fetch users failed' });
    }
};

module.exports = { addProduct, updateProduct, deleteProduct, getAllUsers };
