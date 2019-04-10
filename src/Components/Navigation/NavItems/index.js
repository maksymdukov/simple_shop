import React from 'react';
import {Button, withStyles} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import classes from './index.module.css';
import NavItem from "./NavItem";

const styles = theme => ({
    navItems: {
        display: "block",
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            listStyle: 'none',
            justifyContent: 'center',
        }
    }
});

const NavItems = ({classes, position}) => {
    return (
        <ul className={classes.navItems} >
            <NavItem {...{position}} to="/">Home</NavItem>
            <NavItem {...{position}} to="/builder">Burger Builder</NavItem>
            <NavItem {...{position}} to="/about">About</NavItem>
            <NavItem {...{position}} to="/menu">Menu</NavItem>
        </ul>
    );
};

export default withStyles(styles)(NavItems);