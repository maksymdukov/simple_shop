import React from 'react';
import {Divider, withStyles} from "@material-ui/core";

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        margin: "10px 0",
    }
});

const HeadingDivider = ({classes}) => {
    return (
        <Divider variant='fullWidth' color="primary" className={classes.root} />
    );
};

export default withStyles(styles)(HeadingDivider);