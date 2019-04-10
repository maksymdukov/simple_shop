import {HIDE_MESSAGE, SHOW_MESSAGE} from "../actionTypes";

export const showNotification = (itemName) => ({
    type: SHOW_MESSAGE,
    itemName
});

export const hideNotification = () => ({
    type: HIDE_MESSAGE
});