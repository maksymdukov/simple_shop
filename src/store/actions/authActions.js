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

const TOKEN_EXPIRATION = 3600;

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

const signUpSuccess = () => ({
    type: SIGN_UP_SUCCESS
});

export const signInStart = () => ({
    type: SIGN_IN_START
});

export const signInFail = (error) => ({
    type: SIGN_IN_FAIL,
    error
});

export const signInSuccess = (email, isAnonymous, uid) => ({
    type: SIGN_IN_SUCCESS,
    email,
    isAnonymous,
    uid
});

export const authLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("expirationDate");
    return {
        type: LOGOUT
    }
};

export const tryLogout = () => {
    return async (dispatch) => {
        try {
            await firebase.auth().signOut();
            dispatch(authLogout());
        } catch (e) {
            alert(e);
        }
    }
};

export const checkAuthTimeOut = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(tryLogout())
        }, expirationTime * 1000);
    }
};


export const signUp = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(signUpStart());
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            dispatch(signUpSuccess());
            const expirationDate = new Date(new Date().getTime() + TOKEN_EXPIRATION * 1000);
            localStorage.setItem("email", email);
            localStorage.setItem("expirationDate", +expirationDate);
            dispatch(checkAuthTimeOut(TOKEN_EXPIRATION));
        } catch (error) {
            dispatch(signUpFail(error));
        }
    }
};

export const signIn = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(signInStart());
            await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
            await firebase
                .auth()
                .signInWithEmailAndPassword(email, password);
            const expirationDate = new Date(new Date().getTime() + TOKEN_EXPIRATION * 1000);
            localStorage.setItem("email", email);
            localStorage.setItem("expirationDate", +expirationDate);
            dispatch(checkAuthTimeOut(TOKEN_EXPIRATION));
            return true;
        } catch (error) {
            dispatch(signInFail(error));
        }
    }
};

export const authCheckState = () => {
    return async dispatch => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user && !user.isAnonymous) {
                const expirationDate = localStorage.getItem('expirationDate');
                if (expirationDate) {
                    if (new Date(+expirationDate) > new Date()) {
                        dispatch(signInSuccess(user.email, false, user.uid));
                    } else {
                        dispatch(tryLogout());
                    }
                } else {
                    dispatch(signInSuccess(user.email, false, user.uid));
                }
            }
        });
    }
};