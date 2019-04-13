import React, {useEffect, useState} from 'react';
import {
    withStyles,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Slide, Fade
} from "@material-ui/core";
import IconClose from '@material-ui/icons/CloseRounded'
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import {signUp, resetErrors, signIn} from "../../../store/actions/authActions";
import {connect} from "react-redux";

const styles = (theme) => ({
    closeBtn: {
        position: "absolute",
        right: 0,
        top: 0
    },
    paper: {
        [theme.breakpoints.up('xs')]: {
            width: "90%"
        },
        [theme.breakpoints.up('sm')]: {
            width: 400
        }
    }
});

const Transition = (props) => <Slide direction="down" {...props}/>;

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
        <Dialog onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={isOpened}
                TransitionComponent={Transition}
                classes={{paper:classes.paper}}
        >
            <IconButton
                className={classes.closeBtn}
                onClick={handleClose}
            >
                <IconClose/>
            </IconButton>
            <DialogTitle>
                {isSignUp
                    ? "Sign Up"
                    : "Sign In"
                }
            </DialogTitle>
            <DialogContent>
                {isSignUp
                    ? <SignUp {...{toSignInMode, signUpSuccess, signUpLoading, errorMessage, doSignUp}}/>
                    : <SignIn {...{toSignUpMode, doSignIn, handleClose, signInLoading, signInError}}/>
                }
            </DialogContent>
        </Dialog>
    );
};

const mapStateToProps = (state) => ({
    signUpLoading: state.auth.signUpLoading,
    signUpSuccess: state.auth.signUpSuccess,
    errorMessage: state.auth.signUpError,
    signInLoading: state.auth.signInLoading,
    signInError: state.auth.signInError
});
const mapDispatchToProps = (dispatch) => ({
    doSignUp: (email, password) => dispatch( signUp(email, password) ),
    doSignIn: (email, password) => dispatch( signIn(email, password) ),
});

export default connect(mapStateToProps, mapDispatchToProps)( withStyles(styles)(AuthModal) );