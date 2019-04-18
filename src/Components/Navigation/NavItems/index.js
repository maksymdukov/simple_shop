import React from 'react';
import {withStyles} from "@material-ui/core";
import NavItem from "./NavItem";
import styles from './styles';

const NavItems = ({classes, position}) => {
    return (
        <ul className={classes.navItems} >
            <li>
                <NavItem {...{position}} to="/">Home</NavItem>
            </li>
            <li>
                <NavItem {...{position}} to="/menu">Menu</NavItem>
            </li>
            <li>
                <NavItem {...{position}} to="/builder">Burger Builder</NavItem>
            </li>
            <li>
                <NavItem {...{position}} to="/about">About</NavItem>
            </li>
            <li>
                <NavItem {...{position}} to="/contacts">Contacts</NavItem>
            </li>
        </ul>
    );
};

export default withStyles(styles)(NavItems);