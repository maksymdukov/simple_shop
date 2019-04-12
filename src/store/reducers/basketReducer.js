import {ADD_TO_BASKET, EDIT_BASKET_ITEM, MINUS_BASKET_ITEM, PLUS_BASKET_ITEM, REMOVE_FROM_BASKET} from "../actionTypes";

const initialState = {
    basket: [],
    totalPrice: 0,
    totalQuantity: 0
};

const basketReducer = (state = initialState, {type, item, index}) => {
    switch (type) {
        case ADD_TO_BASKET:
            const basketItem = {...item, quantity: 1};
            return {
                ...state,
                basket: state.basket.concat(basketItem),
                totalQuantity: state.totalQuantity + 1,
                totalPrice: state.totalPrice + item.price
            };
        case REMOVE_FROM_BASKET:
            return {
                ...state,
                basket: state.basket.filter( (_,idx) => idx !== index ),
                totalQuantity: state.totalQuantity - state.basket[index].quantity,
                totalPrice: state.totalPrice - state.basket[index].price * state.basket[index].quantity
            };
        case EDIT_BASKET_ITEM:
            return {
                ...state,
                totalPrice: state.totalPrice - (state.basket[index].price * state.basket[index].quantity) + (item.price * state.basket[index].quantity),
                basket: state.basket.map( (itm,idx) => idx === index ? item : itm)
            };
        case PLUS_BASKET_ITEM:
            const updatedItem = {...state.basket[index], quantity: state.basket[index].quantity + 1};
            const updatedBasket = [...state.basket];
            updatedBasket[index] = updatedItem;
            return {
                ...state,
                basket: updatedBasket,
                totalQuantity: state.totalQuantity + 1,
                totalPrice: state.totalPrice + state.basket[index].price
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
                basket: updBasket,
                totalQuantity: state.totalQuantity - 1,
                totalPrice: state.totalPrice - state.basket[index].price
            };
        default:
            return state;
    }
};

export default basketReducer;