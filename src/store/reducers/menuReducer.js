import {FETCH_MENU_START} from "../actionTypes";
import {FETCH_MENU_FAILED} from "../actionTypes";
import {FETCH_MENU_SUCCESS} from "../actionTypes";


const initialState = {
    menu: null,
    loading: true,
    error: null
};

const menuReducer = (state = initialState, {type, menu, error}) => {
    switch (type) {
        case FETCH_MENU_SUCCESS:
            return {
                ...state,
                menu,
                error: null,
                loading: false
            };
        case FETCH_MENU_FAILED:
            return {
                ...state,
                error: error,
                loading: false
            };
        case FETCH_MENU_START:
            return {
                ...state,
                error: error,
                loading: true
            };
        default:
            return state;
    }
};

export default menuReducer;