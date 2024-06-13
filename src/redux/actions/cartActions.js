import axios from 'axios';

export const addToCart = (userId, productId, quantity) => async (dispatch) => {
    const response = await axios.post('/api/cart', { userId, productId, quantity });
    dispatch({ type: 'ADD_TO_CART', payload: response.data });
};

export const getCart = (userId) => async (dispatch) => {
    const response = await axios.get(`/api/cart/${userId}`);
    dispatch({ type: 'GET_CART', payload: response.data });
};

export const updateCart = (id, quantity) => async (dispatch) => {
    const response = await axios.put(`/api/cart/${id}`, { quantity });
    dispatch({ type: 'UPDATE_CART', payload: response.data });
};

export const removeFromCart = (id) => async (dispatch) => {
    await axios.delete(`/api/cart/${id}`);
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
};
