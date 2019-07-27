import {HIDE_MESSAGE, SHOW_MESSAGE} from "../actionTypes";

const initialState = {
    isOpened: false,
    itemName: ''
};

const notificatorReducer = (state = initialState, {type, itemName}) => {
    switch (type) {
        case SHOW_MESSAGE:
            return {
                isOpened: true,
                itemName
            };
        case HIDE_MESSAGE:
            return {
                ...state,
                isOpened: false
            };
        default:
            return state;
    }
};

export default notificatorReducer;