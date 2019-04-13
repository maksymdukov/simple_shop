import React from 'react';
import {Menu, MenuItem, Popover, withStyles} from "@material-ui/core";

const styles = (theme) => ({

});

const AuthMenu = ({classes, isAuthMenuOpened, handleAuthMenuClosed, doLogout}) => {
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
            <MenuItem onClick={handleAuthMenuClosed}>Profile</MenuItem>
            <MenuItem onClick={handleAuthMenuClosed}>My account</MenuItem>
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
        </Popover>
    );
};

export default withStyles(styles)(AuthMenu);