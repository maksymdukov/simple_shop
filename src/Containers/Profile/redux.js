import {hideReAuth, resetStatus, updateProfile} from "../../store/actions/profileActions";

export const mapStateToProps = (state) => ({
    email: state.auth.email,
    profile: state.profile.profile,
    loading: state.profile.loading,
    uploading: state.profile.uploading,
    uploadError: state.profile.uploadError,
    uploadSuccess: state.profile.uploadSuccess,
    isReAuthModalOpened: state.profile.reauth,
    error: state.profile.error
});
export const mapDispatchToProps = (dispatch) => ({
    updProfile: (profile) => dispatch(updateProfile(profile)),
    doResetStatus: () => dispatch(resetStatus()),
    hideReAuthModal: () => dispatch(hideReAuth()),
});