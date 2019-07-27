import firebase from "../../firebase/config";
import {
    PROFILE_ERASE_LOCALLY,
    PROFILE_LOAD_FAIL,
    PROFILE_LOAD_START,
    PROFILE_LOAD_SUCCESS,
    PROFILE_RESET_STATUS,
    PROFILE_UPLOAD_FAIL,
    PROFILE_UPLOAD_START,
    PROFILE_UPLOAD_SUCCESS,
    REAUTH_HIDE,
    REAUTH_SHOW,
    SET_PROFILE
} from "../actionTypes";
import { setIsManager } from "./authActions";

export const profileLoadStart = () => ({
    type: PROFILE_LOAD_START
});

export const profileLoadSuccess = profile => ({
    type: PROFILE_LOAD_SUCCESS,
    profile
});

export const profileLoadFail = error => ({
    type: PROFILE_LOAD_FAIL,
    error
});

export const profileUploadStart = () => ({
    type: PROFILE_UPLOAD_START
});

export const profileUploadSuccess = profile => ({
    type: PROFILE_UPLOAD_SUCCESS,
    profile
});

export const profileUploadFail = uploadError => ({
    type: PROFILE_UPLOAD_FAIL,
    uploadError
});

export const updateProfile = profile => async (dispatch, getState) => {
    try {
        console.log("In update profile");
        console.log(profile);
        dispatch(profileUploadStart());
        const uid = getState().auth.uid;
        if (profile.password.length) {
            dispatch(updatePassword(profile, uid));
        } else {
            delete profile.password;
            delete profile.confirmPassword;
            await firebase
                .database()
                .ref("users/" + uid + "/profile/")
                .set(profile);
            dispatch(profileUploadSuccess(profile));
        }
    } catch (e) {
        dispatch(profileUploadFail(e));
    }
};

export const showReAuth = () => ({
    type: REAUTH_SHOW
});

export const hideReAuth = () => ({
    type: REAUTH_HIDE
});

export const setProfile = profile => ({
    type: SET_PROFILE,
    profile
});

export const updatePassword = (profile, uid) => async dispatch => {
    try {
        await firebase.auth().currentUser.updatePassword(profile.password);
        if (profile.password.length) {
            delete profile.password;
            delete profile.confirmPassword;
        }
        await firebase
            .database()
            .ref("users/" + uid + "/profile/")
            .set(profile);
        dispatch(profileUploadSuccess(profile));
    } catch (e) {
        if (e.code === "auth/requires-recent-login") {
            dispatch(setProfile(profile));
            dispatch(showReAuth());
        } else {
            dispatch(profileUploadFail(e));
        }
    }
};

export const loadProfile = uid => async dispatch => {
    try {
        dispatch(profileLoadStart());
        const snapshot = await firebase
            .database()
            .ref("users/" + uid + "/profile/")
            .once("value");
        const profile = snapshot.val();
        const snapshotIsMangr = await firebase
            .database()
            .ref("users/" + uid + "/manager")
            .once("value");
        const isManager = snapshotIsMangr.val();
        if (isManager) dispatch(setIsManager());
        dispatch(profileLoadSuccess(profile));
    } catch (e) {
        alert("Can't load profile");
        dispatch(profileLoadFail(e));
    }
};

export const eraseProfileOnLogout = () => ({
    type: PROFILE_ERASE_LOCALLY
});

export const resetStatus = () => ({
    type: PROFILE_RESET_STATUS
});
