import firebase from "../../firebase/config";
import { ERASE_ORDERS_LOCALLY, FETCH_ORDER_LIST_START } from "../actionTypes";
import { FETCH_ORDER_LIST_FAIL } from "../actionTypes";
import { FETCH_ORDER_LIST_SUCCESS } from "../actionTypes";
import { FETCH_ORDERS_START } from "../actionTypes";
import { FETCH_ORDERS_FAIL } from "../actionTypes";
import { FETCH_ORDERS_SUCCESS } from "../actionTypes";

const fetchListStart = () => ({
    type: FETCH_ORDER_LIST_START
});

const fetchListFail = listError => ({
    type: FETCH_ORDER_LIST_FAIL,
    listError
});

const fetchListSuccess = ordersList => ({
    type: FETCH_ORDER_LIST_SUCCESS,
    ordersList
});

export const fetchOrderList = () => {
    return async (dispatch, getState) => {
        try {
            const uid = getState().auth.uid;
            dispatch(fetchListStart());
            const snapshot = await firebase
                .database()
                .ref(`/users/${uid}/orders`)
                .once("value");
            console.log(snapshot.val());
            let orders = [];
            snapshot.forEach(snap => {
                orders.push(snap.key);
            });
            dispatch(fetchListSuccess(orders.reverse()));
        } catch (e) {
            dispatch(fetchListFail(e));
        }
    };
};

const fetchContentStart = () => ({
    type: FETCH_ORDERS_START
});

const fetchContentFail = contentError => ({
    type: FETCH_ORDERS_FAIL,
    contentError
});

const fetchContentSuccess = ordersContent => ({
    type: FETCH_ORDERS_SUCCESS,
    ordersContent
});

export const fetchContent = (start, end) => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchContentStart());
            let promises = [];
            let maximum = getState().userOrders.ordersList.length;
            let boundary = end > maximum ? maximum : end;
            for (let i = start; i < boundary; i++) {
                let orderKey = getState().userOrders.ordersList[i];
                let promise = firebase
                    .database()
                    .ref(`/orders/${orderKey}`)
                    .once("value");
                promises.push(promise);
            }
            let result = await Promise.all(promises);
            result = result.map(item => item.val());
            dispatch(fetchContentSuccess(result));
        } catch (e) {
            dispatch(fetchContentFail(e));
        }
    };
};

export const eraseOrders = () => ({
    type: ERASE_ORDERS_LOCALLY
});
