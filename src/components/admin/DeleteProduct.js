import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Fetch products failed:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/admin/products/${id}`);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error('Delete product failed:', error);
        }
    };

    return (
        <div>
            <h2>Delete Product</h2>
            {products.map(product => (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <button onClick={() => handleDelete(product.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default DeleteProduct;
