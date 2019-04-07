import {FETCH_MENU_FAILED, FETCH_MENU_START, FETCH_MENU_SUCCESS} from "../actionTypes";
import axios from '../../axious-menu';

const fetchMenuStart = () => ({
    type: FETCH_MENU_START
});

const fetchMenuSuccess = (payload) => ({
    type: FETCH_MENU_SUCCESS,
    payload
});

const fetchMenuFailed = (error) => ({
    type: FETCH_MENU_FAILED,
    error
});

export const fetchMenu = () => {
    return dispatch => {
        dispatch( fetchMenuStart() );
        axios.get("/menu")
            .then(res => {
            dispatch(fetchMenuSuccess(res.data));
        })
            .catch(err => {
                dispatch(fetchMenuFailed(err));
            });
    }
};