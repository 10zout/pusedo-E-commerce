const Cart = require('../models/Cart');

const addToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
        const cartItem = await Cart.create({ userId, productId, quantity });
        res.status(201).json(cartItem);
    } catch (error) {
        res.status(400).json({ error: 'Add to cart failed' });
    }
};

const getCart = async (req, res) => {
    const { userId } = req.params;
    try {
        const cartItems = await Cart.findAll({ where: { userId } });
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ error: 'Fetch cart failed' });
    }
};

const updateCart = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    try {
        const cartItem = await Cart.findByPk(id);
        if (!cartItem) {
            return res.status(404).json({ error: 'Cart item not found' });
        }
        cartItem.quantity = quantity;
        await cartItem.save();
        res.json(cartItem);
    } catch (error) {
        res.status(500).json({ error: 'Update cart failed' });
    }
};

const removeFromCart = async (req, res) => {
    const { id } = req.params;
    try {
        const cartItem = await Cart.findByPk(id);
        if (!cartItem) {
            return res.status(404).json({ error: 'Cart item not found' });
        }
        await cartItem.destroy();
        res.json({ message: 'Item removed from cart' });
    } catch (error) {
        res.status(500).json({ error: 'Remove from cart failed' });
    }
};

module.exports = { addToCart, getCart, updateCart, removeFromCart };
