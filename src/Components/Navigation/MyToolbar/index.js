import React, {useState} from 'react';
import Logo from "../../UI/Logo";
import {
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
    },
    shoppingCart: {
        color: "white"
    }
});

const MyToolbar = ({classes, handleDrawerOpen, basket, totalQuantity}) => {
    const [isMenuOpened, setMenuOpened] = useState(null);
    const handleOpenCart = (event) => setMenuOpened(event.currentTarget);
    const handleCloseCart = () => setMenuOpened(null);
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
            <div>
                <IconButton className={classes.shoppingCart}
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
    );
};

const mapStateToProps = (state) => ({
    basket: state.basket.basket,
    totalQuantity: state.basket.totalQuantity
});

export default withStyles(styles)( connect(mapStateToProps)(MyToolbar) );