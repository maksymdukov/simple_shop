import React from 'react';
import {Typography, withStyles} from "@material-ui/core";

const styles = (theme) => ({
    customHeading: {
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        margin: "40px 0 10px 0",
    }
});

const Heading = ({classes, children, ...others}) => {
    return (
        <Typography align="center" className={classes.customHeading} {...others}>
            {children}
        </Typography>
    );
};

export default withStyles(styles)(Heading);