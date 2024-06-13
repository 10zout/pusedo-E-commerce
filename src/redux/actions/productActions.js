import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    const response = await axios.get('/api/products');
    dispatch({ type: 'GET_PRODUCTS', payload: response.data });
};
