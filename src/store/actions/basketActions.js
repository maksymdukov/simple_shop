import {
    ADD_TO_BASKET,
    EDIT_BASKET_ITEM,
    MINUS_BASKET_ITEM,
    PLUS_BASKET_ITEM, PURCHASE_FAIL, PURCHASE_START, PURCHASE_SUCCESS,
    REMOVE_FROM_BASKET,
    RESET_PURCHASE_SUCCESS
} from "../actionTypes";

export const addItemToBasket = (item) => ({
    type: ADD_TO_BASKET,
    item
});

export const removeItemFromBasket = (index) => ({
    type: REMOVE_FROM_BASKET,
    index
});

export const editBasketItem = (index, item) => ({
    type: EDIT_BASKET_ITEM,
    item,
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

export const resetPurchaseSuccess = () => ({
    type: RESET_PURCHASE_SUCCESS
});

export const startPurchasing = () => ({
    type: PURCHASE_START
});

export const purchaseSuccess = () => ({
    type: PURCHASE_SUCCESS
});

export const purchaseFail = (error) => ({
    type: PURCHASE_FAIL,
    error
});

export const makePurchase = (orderData, isAnonymous) => {
    return (dispatch) => {
        dispatch( startPurchasing() );
        if (isAnonymous) {
            setTimeout(()=>{
                dispatch( purchaseSuccess() );
                // dispatch( purchaseFail("error"))
            }, 2000);
        }
    };
};