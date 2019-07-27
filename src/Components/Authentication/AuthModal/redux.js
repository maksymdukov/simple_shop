import {signIn, signUp} from "../../../store/actions/authActions";

export const mapStateToProps = (state) => ({
    signUpLoading: state.auth.signUpLoading,
    signUpSuccess: state.auth.signUpSuccess,
    errorMessage: state.auth.signUpError,
    signInLoading: state.auth.signInLoading,
    signInError: state.auth.signInError
});
export const mapDispatchToProps = (dispatch) => ({
    doSignUp: (email, password, name) => dispatch( signUp(email, password, name) ),
    doSignIn: (email, password) => dispatch( signIn(email, password) ),
});