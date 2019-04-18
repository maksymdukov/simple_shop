import React from 'react';
import {
    withStyles,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Slide
} from "@material-ui/core";
import IconClose from '@material-ui/icons/CloseRounded'
import {connect} from "react-redux";
import SignIn from "../../Authentication/SignIn";
import styles from './styles';
import {mapStateToProps, mapDispatchToProps} from "./redux";

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

export default connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(OnlySignInModal)
);