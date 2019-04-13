import React from 'react';
import {Button, withStyles} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import classes from './index.module.css';
import NavItem from "./NavItem";

const styles = theme => ({
    navItems: {
        display: "block",
        listStyle: 'none',
        padding: 0,
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            listStyle: 'none',
            justifyContent: 'center',
            flexWrap: "wrap",
        }
    }
});

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