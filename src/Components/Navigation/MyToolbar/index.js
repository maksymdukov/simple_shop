import React, { useState } from "react";
import PropTypes from "prop-types";

// Local components
import Logo from "../../UI/Logo";
import NavItems from "../NavItems";
import CartWidget from "../../CartWidget";
import AuthMenu from "../../Authentication/AuthMenu";
import AuthModal from "../../Authentication/AuthModal";

// MUI
import {
    AppBar,
    Badge,
    Button,
    CircularProgress,
    IconButton,
    Toolbar,
    withStyles
} from "@material-ui/core";

// Icons
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

// Styles
import styles from "./styles";

// Redux
import { mapStateToProps, mapDispatchToProps } from "./redux";
import { connect } from "react-redux";

const MyToolbar = ({
    classes,
    handleDrawerOpen,
    totalQuantity,
    position,
    isAuthenticated,
    doLogout,
    doResetErrors,
    email,
    isSigningIn,
    isManager
}) => {
    const [isMenuOpened, setMenuOpened] = useState(null);
    const [isAuthMenuOpened, setAuthMenuOpened] = useState(null);
    const [isAuthModalOpened, setAuthModalOpened] = useState(false);
    const openAuthModal = () => setAuthModalOpened(true);
    const closeAuthModal = () => {
        setAuthModalOpened(false);
        doResetErrors();
    };
    const handleAuthMenuOpened = event =>
        setAuthMenuOpened(event.currentTarget);
    const handleAuthMenuClosed = () => setAuthMenuOpened(null);
    const handleOpenCart = event => {
        setMenuOpened(event.currentTarget);
    };
    const handleCloseCart = () => setMenuOpened(null);

    const toolbarClasses = [classes.toolbar];
    if (position === "fixed") {
        toolbarClasses.push(classes.toolbarFixed);
    }

    const togglerIconClasses = [classes.togglerIcon];
    if (position === "fixed") {
        togglerIconClasses.push(classes.togglerIconFixed);
    }

    const shoppingCartClasses = [classes.shoppingCart];
    if (position === "fixed") {
        shoppingCartClasses.push(classes.shoppingCartFixed);
    }

    const logInButtonClasses = [classes.login];
    if (position === "fixed") {
        logInButtonClasses.push(classes.loginFixed);
    }

    return (
        <AppBar
            position={position}
            className={
                position === "static" ? classes.rootStatic : classes.rootFixed
            }
        >
            <Toolbar className={toolbarClasses.join(" ")}>
                <div className={classes.drawerToggler}>
                    <IconButton
                        className={togglerIconClasses.join(" ")}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
                <div className={classes.logo}>
                    <Logo />
                </div>
                <div className={classes.navItems}>
                    <NavItems {...{ position }} />
                </div>
                <div className={logInButtonClasses.join(" ")}>
                    {isAuthenticated ? (
                        <IconButton
                            aria-owns={
                                isAuthMenuOpened ? "auth-menu" : undefined
                            }
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleAuthMenuOpened}
                        >
                            <AccountCircle />
                        </IconButton>
                    ) : isSigningIn ? (
                        <CircularProgress />
                    ) : (
                        <Button
                            color="inherit"
                            variant="outlined"
                            onClick={openAuthModal}
                        >
                            Sign in
                        </Button>
                    )}
                    <AuthMenu
                        {...{
                            isAuthMenuOpened,
                            handleAuthMenuClosed,
                            doLogout,
                            email,
                            isManager
                        }}
                    />
                    <AuthModal
                        isOpened={isAuthModalOpened}
                        handleClose={closeAuthModal}
                    />
                </div>
                <div>
                    <IconButton
                        className={shoppingCartClasses.join(" ")}
                        onClick={handleOpenCart}
                        aria-owns={isMenuOpened ? "simple-menu" : undefined}
                        aria-haspopup="true"
                    >
                        <Badge badgeContent={totalQuantity} color="primary">
                            <ShoppingCart /> Cart
                        </Badge>
                    </IconButton>
                    <CartWidget
                        anchorEl={isMenuOpened}
                        {...{ handleCloseCart }}
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
};

MyToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    handleDrawerOpen: PropTypes.func.isRequired,
    totalQuantity: PropTypes.number.isRequired,
    position: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    doLogout: PropTypes.func.isRequired,
    doResetErrors: PropTypes.func.isRequired,
    email: PropTypes.string,
    isSigningIn: PropTypes.bool.isRequired,
    isManager: PropTypes.bool.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(MyToolbar));
