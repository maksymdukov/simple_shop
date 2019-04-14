import React from 'react';
import {Dialog, DialogContent, DialogTitle, Divider, Modal, Typography, withStyles} from "@material-ui/core";

const styles = (theme) => ({
    message: {
        textAlign: "center",
    },
    title: {
        textAlign: "center",
    },
    container: {
        padding: theme.spacing.unit * 5
    }
});

const ErrorModal = ({classes, message, isOpened, handleClose}) => {
    return (
        <Dialog
            open={isOpened}
            onClose={handleClose}
        >
            <DialogTitle className={classes.title}>Error occurred</DialogTitle>
            <Divider/>
            <DialogContent className={classes.container}>
                <Typography color="primary" variant="subtitle2" className={classes.message}>
                    {message}
                </Typography>
            </DialogContent>
        </Dialog>
    );
};

export default withStyles(styles)(ErrorModal);