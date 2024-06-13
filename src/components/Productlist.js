import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
