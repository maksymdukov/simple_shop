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
    }
});

const NavItem = ({classes, to, children}) => {
    return (
        <li>
            <Button
                className={classes.customButton}
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