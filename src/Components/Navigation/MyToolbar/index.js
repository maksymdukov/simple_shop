import React from 'react';
import Logo from "../../UI/Logo";
import {Button, IconButton, Toolbar, withStyles} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import NavItems from "../NavItems";

const styles = theme => ({
    root: {
        backgroundImage: "url(https://mrgrill.com.ua/wp-content/uploads/2017/09/banner.jpg)",
        backgroundSize: "cover",
        height: "200px",
        alignItems: "initial"
    },
    navItems: {
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: "block",
            flex: 1,
            textAlign: "center"
        }
    },
    drawerToggler: {
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    }
});

const MyToolbar = ({classes, handleDrawerOpen}) => {
    return (
        <Toolbar component="header" className={classes.root}>
            <div className={classes.drawerToggler}>
                <IconButton
                    style={{color: 'white'}}
                    onClick={handleDrawerOpen}>
                    <MenuIcon/>
                </IconButton>
            </div>
            <Logo/>
            <div className={classes.navItems}>
                <NavItems/>
            </div>
            <div>
                <Button color="inherit">Login</Button>
            </div>
        </Toolbar>
    );
};

export default withStyles(styles)(MyToolbar);