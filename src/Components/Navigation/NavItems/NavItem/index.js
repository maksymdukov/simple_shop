import React from "react";
import PropTypes from "prop-types";

// Router
import { NavLink } from "react-router-dom";

// MUI
import { Button, withStyles } from "@material-ui/core";

// Styles
import styles from "./styles";

const Link = props => <NavLink exact {...props} />;

const NavItem = ({ classes, to, children, position }) => {
    let btnClasses = [classes.customButton];
    if (position === "fixed") {
        btnClasses.push(classes.customButtonFixed);
    }
    return (
        <Button
            className={btnClasses.join(" ")}
            component={Link}
            disableRipple
            activeClassName={classes.customButtonActive}
            {...{ to }}
        >
            {children}
        </Button>
    );
};

NavItem.propTypes = {
    classes: PropTypes.object.isRequired,
    to: PropTypes.string.isRequired,
    children: PropTypes.any,
    position: PropTypes.string
};

export default withStyles(styles)(NavItem);
