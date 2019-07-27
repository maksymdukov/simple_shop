import React, { useState } from "react";
import PropTypes from "prop-types";

// MUI
import {
    withStyles,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Slide
} from "@material-ui/core";
import styles from "./styles";

// Icons
import IconClose from "@material-ui/icons/CloseRounded";

// Local Components
import SignUp from "../SignUp";
import SignIn from "../SignIn";

// Redux
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./redux";

const Transition = props => <Slide direction="down" {...props} />;

const AuthModal = ({
    classes,
    isOpened,
    handleClose,
    doSignUp,
    signUpSuccess,
    errorMessage,
    signUpLoading,
    signInLoading,
    signInError,
    doSignIn
}) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const toSignUpMode = () => setIsSignUp(true);
    const toSignInMode = () => setIsSignUp(false);
    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={isOpened}
            TransitionComponent={Transition}
            classes={{ paper: classes.paper }}
        >
            <IconButton className={classes.closeBtn} onClick={handleClose}>
                <IconClose />
            </IconButton>
            <DialogTitle>{isSignUp ? "Sign Up" : "Sign In"}</DialogTitle>
            <DialogContent>
                {isSignUp ? (
                    <SignUp
                        {...{
                            toSignInMode,
                            signUpSuccess,
                            signUpLoading,
                            errorMessage,
                            doSignUp
                        }}
                    />
                ) : (
                    <SignIn
                        {...{
                            toSignUpMode,
                            doSignIn,
                            handleClose,
                            signInLoading,
                            signInError
                        }}
                    />
                )}
            </DialogContent>
        </Dialog>
    );
};

AuthModal.propTypes = {
    classes: PropTypes.object.isRequired,
    isOpened: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    doSignUp: PropTypes.func.isRequired,
    signUpSuccess: PropTypes.bool,
    errorMessage: PropTypes.object,
    signUpLoading: PropTypes.bool.isRequired,
    signInLoading: PropTypes.bool.isRequired,
    signInError: PropTypes.any,
    doSignIn: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(AuthModal));
