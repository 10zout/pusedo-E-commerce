import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/products/${id}`);
                const product = response.data;
                setName(product.name);
                setPrice(product.price);
                setDescription(product.description);
                setStock(product.stock);
            } catch (error) {
                console.error('Fetch product failed:', error);
            }
        };
        fetchProduct();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`/api/admin/products/${id}`, { name, price, description, stock });
            console.log('Product updated:', response.data);
        } catch (error) {
            console.error('Update product failed:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" />
            <button type="submit">Update Product</button>
        </form>
    );
};

export default EditProduct;
