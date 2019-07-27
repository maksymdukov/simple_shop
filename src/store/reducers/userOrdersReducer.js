import {ERASE_ORDERS_LOCALLY, FETCH_ORDER_LIST_START} from "../actionTypes";
import {FETCH_ORDER_LIST_FAIL} from "../actionTypes";
import {FETCH_ORDER_LIST_SUCCESS} from "../actionTypes";
import {FETCH_ORDERS_START} from "../actionTypes";
import {FETCH_ORDERS_FAIL} from "../actionTypes";
import {FETCH_ORDERS_SUCCESS} from "../actionTypes";

const initState = {
    ordersList: [],
    ordersContent: [],
    listLoading: false,
    contentLoading: false,
    contentError: null,
    listError: null
};

const userOrdersReducer = (state = initState, {type, listError, ordersList, ordersContent, contentError}) => {
    switch (type) {
        case FETCH_ORDER_LIST_START:
            return {
                ...state,
                listLoading: true,
                listError: null
            };
        case FETCH_ORDER_LIST_FAIL:
            return {
                ...state,
                listLoading: false,
                listError
            };
        case FETCH_ORDER_LIST_SUCCESS:
            return {
                ...state,
                listLoading: false,
                ordersList
            };
        case FETCH_ORDERS_START:
            return {
                ...state,
                contentLoading: true,
                contentError: false
            };
        case FETCH_ORDERS_FAIL:
            return {
                ...state,
                contentLoading: false,
                contentError
            };
        case FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                contentLoading: false,
                ordersContent
            };
        case ERASE_ORDERS_LOCALLY:
            return initState;
        default:
            return state;
    }
};

export default userOrdersReducer;