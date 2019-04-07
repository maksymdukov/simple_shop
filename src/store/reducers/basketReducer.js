import {ADD_TO_BASKET, MINUS_BASKET_ITEM, PLUS_BASKET_ITEM, REMOVE_FROM_BASKET} from "../actionTypes";

const initialState = {
    basket: []
};

const basketReducer = (state = initialState, {type, item, index}) => {
    switch (type) {
        case ADD_TO_BASKET:
            const basketItem = {...item, quantity: 1};
            return {
                ...state,
                basket: state.basket.concat(basketItem)
            };
        case REMOVE_FROM_BASKET:
            return {
                ...state,
                basket: state.basket.filter( (_,idx) => idx !== index )
            };
        case PLUS_BASKET_ITEM:
            const updatedItem = {...state.basket[index], quantity: state.basket[index].quantity + 1};
            const updatedBasket = [...state.basket];
            updatedBasket[index] = updatedItem;
            return {
                ...state,
                basket: updatedBasket
            };
        case MINUS_BASKET_ITEM:
            const updItem = {...state.basket[index], quantity: state.basket[index].quantity - 1};
            let updBasket = [...state.basket];
            if (!updItem.quantity) {
                console.log("filter");
                console.log(index);
                updBasket = updBasket.filter( (_,idx) => idx !== index );
            } else {
                updBasket[index] = updItem;
            }
            return {
                ...state,
                basket: updBasket
            };
        default:
            return state;
    }
};

export default basketReducer;