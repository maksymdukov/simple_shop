import {
    ADD_TO_BASKET,
    EDIT_BASKET_ITEM,
    MINUS_BASKET_ITEM,
    PLUS_BASKET_ITEM,
    PURCHASE_FAIL,
    PURCHASE_START,
    PURCHASE_SUCCESS,
    REMOVE_FROM_BASKET,
    RESET_PURCHASE_SUCCESS
} from "../actionTypes";
import firebase from "../../firebase/config";

export const addItemToBasket = item => ({
    type: ADD_TO_BASKET,
    item
});

export const removeItemFromBasket = index => ({
    type: REMOVE_FROM_BASKET,
    index
});

export const editBasketItem = (index, item) => ({
    type: EDIT_BASKET_ITEM,
    item,
    index
});

export const plusQuantity = index => ({
    type: PLUS_BASKET_ITEM,
    index
});

export const minusQuantity = index => ({
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

export const purchaseFail = error => ({
    type: PURCHASE_FAIL,
    error
});

export const makePurchase = contactData => {
    return async (dispatch, getState) => {
        dispatch(startPurchasing());
        const isAnonymous = getState().auth.isAnonymous;
        const order = {
            basket: getState().basket.basket,
            totalPrice: getState().basket.totalPrice,
            totalQuantity: getState().basket.totalQuantity,
            timestamp: Date.now(),
            tokenEmail: isAnonymous ? false : getState().auth.email,
            uid: isAnonymous ? false : getState().auth.uid,
            ...contactData
        };
        try {
            if (isAnonymous) {
                let res = await firebase
                    .database()
                    .ref("orders/")
                    .push(order);
                console.log(res);
                dispatch(purchaseSuccess());
            } else {
                const uid = getState().auth.uid;
                let orderSnap = await firebase
                    .database()
                    .ref("orders/")
                    .push(order);
                await firebase
                    .database()
                    .ref("users/" + uid + "/orders/" + orderSnap.key)
                    .set(true);
                dispatch(purchaseSuccess());
            }
        } catch (e) {
            dispatch(purchaseFail(e));
        }
    };
};
