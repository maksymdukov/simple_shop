import {HIDE_MESSAGE, SHOW_MESSAGE} from "../actionTypes";

export const showMessage = (itemName) => ({
    type: SHOW_MESSAGE,
    itemName
});

export const hideMessage = () => ({
    type: HIDE_MESSAGE
});