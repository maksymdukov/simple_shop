import {
    PROFILE_ERASE_LOCALLY,
    PROFILE_LOAD_FAIL,
    PROFILE_LOAD_START,
    PROFILE_LOAD_SUCCESS, PROFILE_RESET_STATUS,
    PROFILE_UPLOAD_FAIL,
    PROFILE_UPLOAD_START, PROFILE_UPLOAD_SUCCESS, REAUTH_HIDE, REAUTH_SHOW, SET_PROFILE
} from "../actionTypes";

const initState = {
    profile: {},
    loading: false,
    error: null,
    uploading: false,
    uploadError: null,
    uploadSuccess: false,
    reauth: false
};

const profileReducer = (state = initState, {type, error, uploadError, profile, tempProfile}) => {
  switch (type) {
      case PROFILE_LOAD_START:
          return {
              ...state,
              loading: true,
              error: null,
              uploadSuccess: false
          };
      case PROFILE_LOAD_FAIL:
          return {
              ...state,
              loading: false,
              error
          };
      case PROFILE_LOAD_SUCCESS:
          return {
              ...state,
              loading: false,
              profile
          };
      case PROFILE_UPLOAD_START:
          return {
              ...state,
              uploading: true,
              uploadError: null,
              uploadSuccess: false
          };
      case PROFILE_UPLOAD_FAIL:
          return {
              ...state,
              uploading: false,
              uploadError: uploadError,
          };
      case PROFILE_UPLOAD_SUCCESS:
          return {
              ...state,
              profile,
              uploading: false,
              uploadSuccess: true
          };
      case PROFILE_ERASE_LOCALLY:
          return initState;
      case PROFILE_RESET_STATUS:
          return {
              ...state,
              uploadSuccess: false,
              uploadError: null
          };
      case REAUTH_SHOW:
          return {
              ...state,
              reauth: true
          };
      case REAUTH_HIDE:
          return {
              ...state,
              reauth: false
          };
      case SET_PROFILE:
          return {
              ...state,
              profile
          };
      default:
          return state;
  }
};

export default profileReducer;