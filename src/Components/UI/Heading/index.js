import React from 'react';
import {Typography, withStyles} from "@material-ui/core";
import styles from './styles';

const Heading = ({classes, children, ...others}) => {
    return (
        <Typography align="center" className={classes.customHeading} {...others}>
            {children}
        </Typography>
    );
};

export default withStyles(styles)(Heading);