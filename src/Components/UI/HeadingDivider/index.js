import React from 'react';
import {Divider, withStyles} from "@material-ui/core";
import styles from './styles';

const HeadingDivider = ({classes}) => {
    return (
        <Divider variant='fullWidth' color="primary" className={classes.root} />
    );
};

export default withStyles(styles)(HeadingDivider);