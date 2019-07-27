import { signIn } from "../../../store/actions/authActions";

export const mapStateToProps = state => ({
    signInLoading: state.auth.signInLoading,
    signInError: state.auth.signInError
});
export const mapDispatchToProps = dispatch => ({
    doSignIn: (email, password) => dispatch(signIn(email, password))
});
