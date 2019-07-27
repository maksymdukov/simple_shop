import React from "react";
import PropTypes from "prop-types";

// MUI
import { Typography, withStyles } from "@material-ui/core";

// Styles
import styles from "./styles";

const Heading = ({ classes, children, ...others }) => {
    return (
        <Typography
            align="center"
            className={classes.customHeading}
            {...others}
        >
            {children}
        </Typography>
    );
};

Heading.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Heading);
