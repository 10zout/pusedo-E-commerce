const express = require('express');
const { addProduct, updateProduct, deleteProduct, getAllUsers } = require('../controllers/adminController');
const router = express.Router();

router.post('/products', addProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
router.get('/users', getAllUsers);

module.exports = router;
