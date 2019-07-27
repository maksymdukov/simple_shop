import React from "react";
import PropTypes from "prop-types";
// MUI
import { Divider, withStyles } from "@material-ui/core";

// Styles
import styles from "./styles";

const HeadingDivider = ({ classes }) => {
    return (
        <Divider variant="fullWidth" color="primary" className={classes.root} />
    );
};

HeadingDivider.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeadingDivider);
