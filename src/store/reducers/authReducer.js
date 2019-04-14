import {
    LOGOUT, RESET_ERRORS,
    SIGN_IN_FAIL,
    SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_UP_FAIL,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
} from "../actionTypes";

const initState = {
    email: null,
    isAnonymous: true,
    signUpLoading: false,
    signUpSuccess: null,
    signUpError: null,
    signInLoading: false,
    signInError: null,
    uid: null
};

const authReducer = (state = initState, {type, error,  email, isAnonymous, uid}) => {
    switch (type) {
        case SIGN_UP_START:
            return {
              ...state,
              signUpLoading: true,
              signUpSuccess: null,
              signUpError: null
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpLoading: false,
                signUpSuccess: true,
                signUpError: null,
            };
        case SIGN_UP_FAIL:
            return {
                ...state,
                signUpLoading: false,
                signUpError: error
            };
        case RESET_ERRORS:
            return {
                ...state,
                signUpSuccess: null,
                signUpError: null,
                signInError: null
            };
        case SIGN_IN_START:
            return {
                ...state,
                signInLoading: true,
                signUpSuccess: null,
                signUpError: null,
                signInError: null
            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                signInLoading: false,
                signInError: false,
                uid,
                email,
                isAnonymous
            };
        case SIGN_IN_FAIL:
            return {
                ...state,
                signInLoading: false,
                signInError: error
            };
        case LOGOUT:
            return {
                email: null,
                isAnonymous: true,
                signUpLoading: false,
                signUpSuccess: null,
                signUpError: null,
                signInLoading: false,
                signInError: null,
                uid: null
            };
        default:
            return state;
    }
};

export default authReducer;