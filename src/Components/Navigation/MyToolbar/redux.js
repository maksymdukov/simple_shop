import {resetErrors, tryLogout} from "../../../store/actions/authActions";

export const mapStateToProps = (state) => ({
    basket: state.basket.basket,
    totalQuantity: state.basket.totalQuantity,
    isAuthenticated: !state.auth.isAnonymous,
    isManager: state.auth.isManager,
    email: state.auth.email,
    isSigningIn: state.auth.signInLoading
});

export const mapDispatchToProps = (dispatch) => ({
    doLogout: () => dispatch(tryLogout()),
    doResetErrors: () => dispatch(resetErrors())
});