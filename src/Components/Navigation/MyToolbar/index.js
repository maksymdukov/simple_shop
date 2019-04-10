import React, {useState} from 'react';
import Logo from "../../UI/Logo";
import {
    AppBar,
    Badge,
    Button,
    ClickAwayListener,
    IconButton,
    Menu,
    MenuItem, Paper,
    Popper,
    Toolbar,
    withStyles
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import NavItems from "../NavItems";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import {connect} from "react-redux";
import CartWidget from "../../CartWidget";

const styles = theme => ({
    rootStatic: {
        backgroundColor: "transparent",
        boxShadow: "none"
    },
    rootFixed: {
        backgroundColor: "white"
    },
    toolbar: {
        justifyContent: "space-between",
        alignItems: "initial",
        [theme.breakpoints.up('sm')]: {
            justifyContent: "initial"
        }
    },
    toolbarFixed: {
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
    },
    togglerIcon: {
        color: "white"
    },
    togglerIconFixed: {
        color: "grey"
    },
    shoppingCart: {
        color: "white"
    },
    shoppingCartFixed: {
        color: "grey"
    }
});

const MyToolbar = ({classes, handleDrawerOpen, basket, totalQuantity, position }) => {
    const [isMenuOpened, setMenuOpened] = useState(null);
    const handleOpenCart = (event) => setMenuOpened(event.currentTarget);
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

    return (
        <AppBar position={position} className={position === 'static' ? classes.rootStatic : classes.rootFixed}>
        <Toolbar className={toolbarClasses.join(" ")}>
            <div className={classes.drawerToggler}>
                <IconButton
                    className={togglerIconClasses.join(" ")}
                    onClick={handleDrawerOpen}>
                    <MenuIcon/>
                </IconButton>
            </div>
            <Logo/>
            <div className={classes.navItems}>
                <NavItems {...{position}}/>
            </div>
            <div>
                <Button color="inherit">Login</Button>
            </div>
            <div>
                <IconButton className={shoppingCartClasses.join(" ")}
                            onClick={handleOpenCart}
                            aria-owns={isMenuOpened ? 'simple-menu' : undefined}
                            aria-haspopup="true">
                    <Badge badgeContent={totalQuantity} color="primary">
                        <ShoppingCart/> Корзина
                    </Badge>
                </IconButton>
                <CartWidget anchorEl={isMenuOpened} {...{handleCloseCart}}/>
            </div>
        </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = (state) => ({
    basket: state.basket.basket,
    totalQuantity: state.basket.totalQuantity
});

export default withStyles(styles)( connect(mapStateToProps)(MyToolbar) );