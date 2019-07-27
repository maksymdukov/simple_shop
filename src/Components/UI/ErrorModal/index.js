import React from "react";
import PropTypes from "prop-types";

// MUI
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Divider,
    Typography,
    withStyles
} from "@material-ui/core";

// Styles
import styles from "./styles";

const ErrorModal = ({ classes, message, isOpened, handleClose }) => {
    return (
        <Dialog open={isOpened} onClose={handleClose}>
            <DialogTitle className={classes.title}>Error occurred</DialogTitle>
            <Divider />
            <DialogContent className={classes.container}>
                <Typography
                    color="primary"
                    variant="subtitle2"
                    className={classes.message}
                >
                    {message}
                </Typography>
            </DialogContent>
        </Dialog>
    );
};

ErrorModal.propTypes = {
    classes: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired,
    isOpened: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default withStyles(styles)(ErrorModal);
