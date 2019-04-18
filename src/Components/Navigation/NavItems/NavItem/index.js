import React from 'react';
import {NavLink} from "react-router-dom";
import {Button, withStyles} from "@material-ui/core";
import styles from './styles';

const Link = (props) => <NavLink exact {...props} />;

const NavItem = ({classes, to, children, position}) => {
    let btnClasses = [classes.customButton];
    if (position === "fixed") {
        btnClasses.push(classes.customButtonFixed)
    }
    return (
            <Button
                className={btnClasses.join(" ")}
                component={Link}
                disableRipple
                activeClassName={classes.customButtonActive}
                {...{to}}
            >
                {children}
            </Button>
    );
};

export default withStyles(styles)(NavItem);