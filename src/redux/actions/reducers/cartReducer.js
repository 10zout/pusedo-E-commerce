const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cartItems: [...state.cartItems, action.payload] };
        case 'GET_CART':
            return { ...state, cartItems: action.payload };
        case 'UPDATE_CART':
            return { 
                ...state, 
                cartItems: state.cartItems.map(item => item.id === action.payload.id ? action.payload : item)
            };
        case 'REMOVE_FROM_CART':
            return { 
                ...state, 
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
};

export default cartReducer;
