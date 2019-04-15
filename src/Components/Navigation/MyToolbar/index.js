import React, {useRef, useState, Fragment} from 'react';
import Logo from "../../UI/Logo";
import {
    AppBar,
    Badge,
    Button, CircularProgress,
    ClickAwayListener,
    IconButton,
    Menu,
    MenuItem, Paper,
    Popper, RootRef,
    Toolbar,
    withStyles
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NavItems from "../NavItems";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import {connect} from "react-redux";
import CartWidget from "../../CartWidget";
import AuthMenu from "../../Authentication/AuthMenu";
import AuthModal from "../../Authentication/AuthModal";
import {tryLogout, resetErrors} from "../../../store/actions/authActions";

const styles = theme => ({
    rootStatic: {
        backgroundColor: "transparent",
        boxShadow: "none"
    },
    rootFixed: {
        backgroundColor: "white"
    },
    toolbar: {
        padding: 4,
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.up('md')]: {
            justifyContent: "initial"
        }
    },
    toolbarFixed: {},
    navItems: {
        display: "none",
        [theme.breakpoints.up('md')]: {
            display: "block",
            flex: 1,
            textAlign: "center"
        }
    },
    drawerToggler: {
        [theme.breakpoints.up('md')]: {
            display: "none"
        }
    },
    togglerIcon: {
        color: "white"
    },
    togglerIconFixed: {
        color: "grey"
    },
    shoppingCart: {
        color: "white",
        marginLeft: 10,
        marginRight: 10
    },
    shoppingCartFixed: {
        color: "grey"
    },
    logo: {
        height: 50,
        backgroundColor: "transparent",
        margin: 10,
        flex: 1,
        [theme.breakpoints.up('md')]: {
            flex: 0
        }
    },
    login: {
        transition: "color 0.2s linear",
        // display: "none",
        '&:hover': {
            // backgroundColor: "white"
            color: theme.palette.primary.main
        },
        [theme.breakpoints.up('sm')]: {
            display: "block"
        }
    },
    loginFixed: {
        color: "grey"
    }
});

const MyToolbar = ({
                       classes,
                       handleDrawerOpen,
                       basket,
                       totalQuantity,
                       position,
                       isAuthenticated,
                       doLogout,
                       doResetErrors,
                       email,
                       isSigningIn
}) => {
    const appbarEl = useRef(null);
    const [isMenuOpened, setMenuOpened] = useState(null);
    const [isAuthMenuOpened, setAuthMenuOpened] = useState(null);
    const [isAuthModalOpened, setAuthModalOpened] = useState(false);
    const openAuthModal = () => setAuthModalOpened(true);
    const closeAuthModal = () => {
        setAuthModalOpened(false);
        doResetErrors();
    };
    const handleAuthMenuOpened = (event) => setAuthMenuOpened(event.currentTarget);
    const handleAuthMenuClosed = () => setAuthMenuOpened(null);
    const handleOpenCart = (event) => {
        setMenuOpened(event.currentTarget);
        // setMenuOpened(appbarEl.current);
    };
    const handleCloseCart = () => setMenuOpened(null);

    const toolbarClasses = [classes.toolbar];
    if (position === "fixed") {
        toolbarClasses.push(classes.toolbarFixed)
    }

    const togglerIconClasses = [classes.togglerIcon];
    if (position === "fixed") {
        togglerIconClasses.push(classes.togglerIconFixed)
    }

    const shoppingCartClasses = [classes.shoppingCart];
    if (position === "fixed") {
        shoppingCartClasses.push(classes.shoppingCartFixed)
    }

    const logInButtonClasses = [classes.login];
    if (position === "fixed") {
        logInButtonClasses.push(classes.loginFixed)
    }

    return (
        <RootRef rootRef={appbarEl}>
            <AppBar position={position}
                    className={position === 'static' ? classes.rootStatic : classes.rootFixed}
            >
                <Toolbar className={toolbarClasses.join(" ")}>
                    <div className={classes.drawerToggler}>
                        <IconButton
                            className={togglerIconClasses.join(" ")}
                            onClick={handleDrawerOpen}>
                            <MenuIcon/>
                        </IconButton>
                    </div>
                    <div className={classes.logo}>
                        <Logo/>
                    </div>
                    <div className={classes.navItems}>
                        <NavItems {...{position}}/>
                    </div>
                    <div className={logInButtonClasses.join(" ")}>
                        {isAuthenticated
                            ?
                            <IconButton
                                aria-owns={isAuthMenuOpened ? 'auth-menu' : undefined}
                                aria-haspopup="true"
                                color="inherit"
                                onClick={handleAuthMenuOpened}
                            >
                                <AccountCircle/>
                            </IconButton>

                            :
                            isSigningIn ? <CircularProgress/> :<Button
                                color="inherit"
                                variant="outlined"
                                onClick={openAuthModal}
                            >
                                Sign in
                            </Button>
                        }
                        <AuthMenu
                            {...{isAuthMenuOpened, handleAuthMenuClosed, doLogout, email}}
                        />
                        <AuthModal
                            isOpened={isAuthModalOpened}
                            handleClose={closeAuthModal}
                        />
                    </div>
                    <div>
                        <IconButton className={shoppingCartClasses.join(" ")}
                                    onClick={handleOpenCart}
                                    aria-owns={isMenuOpened ? 'simple-menu' : undefined}
                                    aria-haspopup="true">
                            <Badge badgeContent={totalQuantity}
                                   color="primary"
                            >
                                <ShoppingCart/> Cart
                            </Badge>
                        </IconButton>
                        <CartWidget anchorEl={isMenuOpened} {...{handleCloseCart}}/>
                    </div>
                </Toolbar>
            </AppBar>
        </RootRef>
    );
};

const mapStateToProps = (state) => ({
    basket: state.basket.basket,
    totalQuantity: state.basket.totalQuantity,
    isAuthenticated: !state.auth.isAnonymous,
    email: state.auth.email,
    isSigningIn: state.auth.signInLoading
});

const mapDispatchToProps = (dispatch) => ({
    doLogout: () => dispatch(tryLogout()),
    doResetErrors: () => dispatch(resetErrors())
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MyToolbar));