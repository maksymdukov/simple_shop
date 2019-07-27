import React from "react";
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

// Icons
import IconClose from "@material-ui/icons/CloseRounded";

// Redux
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./redux";

// Local components
import SignIn from "../../Authentication/SignIn";

// Styles
import styles from "./styles";

const Transition = props => <Slide direction="down" {...props} />;

const OnlySignInModal = ({
    classes,
    isOpened,
    handleClose,
    signInLoading,
    signInError,
    doSignIn
}) => {
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
            <DialogTitle className={classes.title}>
                Please, Log In again.
            </DialogTitle>
            <DialogContent>
                <SignIn
                    onlySignIn
                    {...{ doSignIn, handleClose, signInLoading, signInError }}
                />
            </DialogContent>
        </Dialog>
    );
};

OnlySignInModal.propTypes = {
    classes: PropTypes.object.isRequired,
    isOpened: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    signInLoading: PropTypes.bool,
    signInError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    doSignIn: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(OnlySignInModal));
