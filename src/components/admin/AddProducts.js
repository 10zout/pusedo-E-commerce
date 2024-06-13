import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/admin/products', { name, price, description, stock });
            console.log('Product added:', response.data);
        } catch (error) {
            console.error('Add product failed:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
