import React from "react";
import PropTypes from "prop-types";

// MUI
import { withStyles } from "@material-ui/core";

// Local components
import NavItem from "./NavItem";

// Styles
import styles from "./styles";

const NavItems = ({ classes, position }) => {
    return (
        <ul className={classes.navItems}>
            <li>
                <NavItem {...{ position }} to="/">
                    Home
                </NavItem>
            </li>
            <li>
                <NavItem {...{ position }} to="/menu">
                    Menu
                </NavItem>
            </li>
            <li>
                <NavItem {...{ position }} to="/builder">
                    Burger Builder
                </NavItem>
            </li>
            <li>
                <NavItem {...{ position }} to="/about">
                    About
                </NavItem>
            </li>
            <li>
                <NavItem {...{ position }} to="/contacts">
                    Contacts
                </NavItem>
            </li>
        </ul>
    );
};

NavItems.propTypes = {
    classes: PropTypes.object.isRequired, 
    position: PropTypes.string
};

export default withStyles(styles)(NavItems);
