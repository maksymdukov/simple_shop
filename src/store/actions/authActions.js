import {
    LOGOUT, RESET_ERRORS,
    SIGN_IN_FAIL,
    SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_UP_FAIL,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
} from "../actionTypes";
import firebase from '../../firebase/config';

const signUpStart = () => ({
    type: SIGN_UP_START
});

export const resetErrors = () => ({
    type: RESET_ERRORS
});

export const signUpFail = (error) => ({
    type: SIGN_UP_FAIL,
    error
});

const signUpSuccess = (token, expiration, email, uid) => ({
    type: SIGN_UP_SUCCESS,
    token,
    expiration,
    uid,
    email
});

export const signInStart = () => ({
    type: SIGN_IN_START
});

export const signInFail = (error) => ({
    type: SIGN_IN_FAIL,
    error
});

export const signInSuccess = (token, expiration, email, uid) => ({
    type: SIGN_IN_SUCCESS,
    token,
    expiration,
    uid,
    email
});

export const logout = () => ({
    type: LOGOUT
});


export const signUp = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch( signUpStart() );
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            const {token, claims: {user_id} } = await firebase.auth().currentUser.getIdTokenResult();
            dispatch( signUpSuccess(token, 3600, email, user_id, password ) );
        }
        catch (error) {
            dispatch(signUpFail(error));
            }
        }
};

export const signIn = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch( signInStart() );
            await firebase
                .auth()
                .signInWithEmailAndPassword(email, password);
            const {token, claims: {user_id} } = await firebase.auth().currentUser.getIdTokenResult();
            dispatch( signInSuccess(token, 3600, email, user_id, password ) );
            return true;
        }
        catch (error) {
            dispatch(signInFail(error));
        }
    }
};