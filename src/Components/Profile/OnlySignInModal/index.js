import React, {useEffect, useState} from 'react';
import {
    withStyles,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Slide
} from "@material-ui/core";
import IconClose from '@material-ui/icons/CloseRounded'
import {signIn} from "../../../store/actions/authActions";
import {connect} from "react-redux";
import SignIn from "../../Authentication/SignIn";

const styles = (theme) => ({
    closeBtn: {
        position: "absolute",
        right: 0,
        top: 0
    },
    paper: {
        maxHeight: "none",
        [theme.breakpoints.up('xs')]: {
            width: "90%"
        },
        [theme.breakpoints.up('sm')]: {
            width: 400
        }
    },
    title: {
        textAlign: "center"
    }
});

const Transition = (props) => <Slide direction="down" {...props}/>;

const OnlySignInModal = ({
                       classes,
                       isOpened,
                       handleClose,
                       errorMessage,
                       signInLoading,
                       signInError,
                       doSignIn
                   }) => {
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
            <DialogTitle className={classes.title}>
                Please, Log In again.
            </DialogTitle>
            <DialogContent>
                <SignIn
                    onlySignIn
                    {...{doSignIn, handleClose, signInLoading, signInError}}
                />
            </DialogContent>
        </Dialog>
    );
};

const mapStateToProps = (state) => ({
    signInLoading: state.auth.signInLoading,
    signInError: state.auth.signInError
});
const mapDispatchToProps = (dispatch) => ({
    doSignIn: (email, password) => dispatch( signIn(email, password) ),
});

export default connect(mapStateToProps, mapDispatchToProps)( withStyles(styles)(OnlySignInModal) );