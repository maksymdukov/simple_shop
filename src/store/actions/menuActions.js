import {FETCH_MENU_FAILED, FETCH_MENU_START, FETCH_MENU_SUCCESS} from "../actionTypes";
import firebase from "../../firebase/config";

const fetchMenuStart = () => ({
    type: FETCH_MENU_START
});

const fetchMenuSuccess = (menu) => ({
    type: FETCH_MENU_SUCCESS,
    menu
});

const fetchMenuFailed = (error) => ({
    type: FETCH_MENU_FAILED,
    error
});

export const fetchMenu = () => {
    return async (dispatch, getState) => {
        console.log( !!getState().menu.menu );
        if (!getState().menu.menu) {
            dispatch( fetchMenuStart() );
            try {
                const snapshot = await firebase.database().ref('/menu').once('value');
                dispatch ( fetchMenuSuccess( snapshot.val() ) );
            }
            catch (e) {
                dispatch(fetchMenuFailed(e));
            }
        }
    }
};