import {ADD_TO_BASKET, MINUS_BASKET_ITEM, PLUS_BASKET_ITEM, REMOVE_FROM_BASKET} from "../actionTypes";

export const addItemToBasket = (item) => ({
    type: ADD_TO_BASKET,
    item
});

export const removeItemFromBasket = (index) => ({
    type: REMOVE_FROM_BASKET,
    index
});

export const plusQuantity = (index) => ({
    type: PLUS_BASKET_ITEM,
    index
});

export const minusQuantity = (index) => ({
    type: MINUS_BASKET_ITEM,
    index
});