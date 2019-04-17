import React from 'react';
import {DialogTitle, Divider, Menu, MenuItem, Popover, withStyles} from "@material-ui/core";
import {NavLink, withRouter} from "react-router-dom";

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

const AuthMenu = (props) => {
    const {classes, isAuthMenuOpened, handleAuthMenuClosed, doLogout, email, history, isManager} = props;
    const handleLogoutClick = () => {
        doLogout();
        handleAuthMenuClosed();
    };
    const handleMyOrdersClick = () => {
        history.push('/orders');
        handleAuthMenuClosed();
    };

    const handleEditProfileClick = () => {
        history.push('/profile');
        handleAuthMenuClosed();
    };

    const handlePanelClick = () => {
        history.push('/manager-panel');
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
            {isManager &&
                <MenuItem onClick={handlePanelClick}>
                    <NavLink
                        className={classes.navItems}
                        activeClassName={classes.active}
                        to="/manager-panel"
                    >
                        Manager panel
                    </NavLink>
                </MenuItem>
            }
            <MenuItem onClick={handleEditProfileClick}>
                <NavLink
                    className={classes.navItems}
                    activeClassName={classes.active}
                    to="/profile"
                >
                    Edit Profile
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleMyOrdersClick}>
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

export default withRouter( withStyles(styles)(AuthMenu) );