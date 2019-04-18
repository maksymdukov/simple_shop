import React from 'react';
import {Dialog, DialogContent, DialogTitle, Divider, Typography, withStyles} from "@material-ui/core";
import styles from './styles';

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