import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, updateCart, removeFromCart } from '../redux/actions/cartActions';

const Cart = () => {
    const dispatch = useDispatch();
    const userId = 1; // Replace with actual user ID
    const cartItems = useSelector(state => state.cart.cartItems);

    useEffect(() => {
        dispatch(getCart(userId));
    }, [dispatch, userId]);

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateCart(id, quantity));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.map(item => (
                <div key={item.id}>
                    <p>{item.productId}</p>
                    <input 
                        type="number" 
                        value={item.quantity} 
                        onChange={(e) => handleUpdateQuantity(item.id, e.target.value)} 
                    />
                    <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
