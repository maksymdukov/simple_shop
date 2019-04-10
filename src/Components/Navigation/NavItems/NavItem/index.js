import React from 'react';
import {NavLink} from "react-router-dom";
import {Button, withStyles} from "@material-ui/core";

const Link = (props) => <NavLink exact {...props} />;

const styles = theme => ({
    root: {
        display: "flex",
        listStyle: "none",
        justifyContent: "center"
    },
    customButton: {
        transition: "color 0.2s linear",
        color: "red",
        '&:hover': {
            backgroundColor: "grey"
        },
        [theme.breakpoints.up('sm')]: {
            color: "white"
        }
    },
    customButtonActive: {
        backgroundColor: "grey"
    },
    customButtonFixed: {
        [theme.breakpoints.up('sm')]: {
            color: "red"
        }
    }
});

const NavItem = ({classes, to, children, position}) => {
    let btnClasses = [classes.customButton];
    if (position === "fixed") {
        btnClasses.push(classes.customButtonFixed)
    }
    return (
        <li>
            <Button
                className={btnClasses.join(" ")}
                component={Link}
                activeClassName={classes.customButtonActive}
                {...{to}}
            >
                {children}
            </Button>
        </li>
    );
};

export default withStyles(styles)(NavItem);