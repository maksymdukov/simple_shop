import React from 'react';
import {DialogTitle, Divider, Menu, MenuItem, Popover, withStyles} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const styles = (theme) => ({
    navItems: {
        textDecoration: 'none',
        color: 'inherit',
        '&:active, &:hover, &:visited': {
            textDecoration: 'none',
            color: 'inherit',
        },
        '&$active': {
            color: theme.palette.primary.main,
        }
    },
    active: {}
});

const AuthMenu = ({classes, isAuthMenuOpened, handleAuthMenuClosed, doLogout, email}) => {
    const handleLogoutClick = () => {
        doLogout();
        handleAuthMenuClosed();
    };
    return (
        <Popover
            id="auth-menu"
            anchorEl={isAuthMenuOpened}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left',}}
            open={Boolean(isAuthMenuOpened)}
            onClose={handleAuthMenuClosed}
        >
            {email && <DialogTitle>{email}</DialogTitle> }
            <Divider/>
            <MenuItem onClick={handleAuthMenuClosed}>Profile</MenuItem>
            <MenuItem onClick={handleAuthMenuClosed}>
                <NavLink
                    className={classes.navItems}
                    activeClassName={classes.active}
                    to="/orders"
                >
                    My orders
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
        </Popover>
    );
};

export default withStyles(styles)(AuthMenu);