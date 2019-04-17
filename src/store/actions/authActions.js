import {
    LOGOUT, RESET_ERRORS, SET_IS_MANAGER,
    SIGN_IN_FAIL,
    SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_UP_FAIL,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
} from "../actionTypes";
import firebase from '../../firebase/config';
import {eraseProfileOnLogout, loadProfile} from "./profileActions";
import {eraseOrders} from "./userOrdersActions";

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

export const signInSuccess = (email, isAnonymous, uid, token) => ({
    type: SIGN_IN_SUCCESS,
    email,
    isAnonymous,
    uid,
    token
});

export const setIsManager = () => ({
    type: SET_IS_MANAGER
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
            dispatch(authLogout());
            dispatch(eraseProfileOnLogout());
            dispatch(eraseOrders());
            await firebase.auth().signOut();
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


export const signUp = (email, password, name) => {
    return async (dispatch) => {
        try {
            dispatch(signUpStart());
            await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
            let result = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            const uid = result.user.uid;
            await firebase.database().ref('users/'+uid+'/profile/').set({name, email});
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
        dispatch(signInStart());
        firebase.auth().onAuthStateChanged(async (user) => {
            console.log(user);
            if (user && !user.isAnonymous) {
                const expirationDate = localStorage.getItem('expirationDate');
                if (expirationDate) {
                    if (new Date(+expirationDate) > new Date()) {
                        const token = await user.getIdToken();
                        dispatch(signInSuccess(user.email, false, user.uid, token));
                        dispatch(loadProfile(user.uid));
                    } else {
                        dispatch(tryLogout());
                    }
                } else {
                    dispatch(signInSuccess(user.email, false, user.uid));
                    dispatch(loadProfile(user.uid));
                }
            } else {
                dispatch(signInFail(null));
            }
        }, (err)=>{
            dispatch(signInFail(err))
        });
    }
};