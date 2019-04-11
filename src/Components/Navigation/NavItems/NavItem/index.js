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
        background: "none",
        margin: "0 5px",
        borderRadius: 0,
        color: theme.palette.common.darkGrey,
        '&:hover': {
            background: "none",
            borderRadius: 0,
            color: theme.palette.primary.main
        },
        [theme.breakpoints.up('md')]: {
            color: theme.palette.common.white
        }
    },
    customButtonActive: {
        borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
    customButtonFixed: {
        color: theme.palette.common.grey,
        '&:hover': {
            backgroundColor: theme.palette.common.white
        },
        [theme.breakpoints.up('md')]: {
            color: theme.palette.common.darkGrey,
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
                disableRipple
                activeClassName={classes.customButtonActive}
                {...{to}}
            >
                {children}
            </Button>
        </li>
    );
};

export default withStyles(styles)(NavItem);