const express = require('express');
const { addToCart, getCart, updateCart, removeFromCart } = require('../controllers/cartController');
const router = express.Router();

router.post('/', addToCart);
router.get('/:userId', getCart);
router.put('/:id', updateCart);
router.delete('/:id', removeFromCart);

module.exports = router;
