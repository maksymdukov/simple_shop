import React from 'react';
import {
    ClickAwayListener,
    Divider,
    List,
    Menu,
    Paper,
    Popover,
    Popper,
    Typography,
    withStyles,
    Grid, Button
} from "@material-ui/core";
import {plusQuantity, minusQuantity, removeItemFromBasket} from "../../store/actions/basketActions";
import {connect} from "react-redux";
import CartWidgetItem from "./CartWidgetItem";
import ScrollBar from "../UI/ScrollBar";
import {Link} from "react-router-dom";

const styles = (theme) => ({
    paper: {
        [theme.breakpoints.up("xs")]: {
            width: "80vw",
        },
        [theme.breakpoints.up("sm")]: {
            width: 400
        },
        [theme.breakpoints.up("md")]: {
            width: 500
        }
    },
    listContainer: {
        // maxHeight: 300,
        // overflow: "auto",
    },
    productList: {
    },
    price: {
        paddingRight: 10
    },
    priceTag: {
        color: theme.palette.primary.main
    },
    empty: {
        paddingLeft: 20
    },
    actionsContainer: {
        padding: 15
    },
    checkoutBtn: {

    }
});

const CartWidget = ({classes, anchorEl, handleCloseCart, basket, plusQuantity, minusQuantity, removeItem, totalPrice}) => {
    let basketItems = basket.map((item,idx) => (
        <CartWidgetItem
            key={item.id || item.name}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            {...{idx, plusQuantity, minusQuantity, removeItem}}/>
    ));
    if (!basket.length) {
        basketItems = (
            <Typography align="left" className={classes.empty} gutterBottom variant="subtitle1">
                Cart is empty.
            </Typography>
        );
    }

    return (
        <Popover
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseCart}
            classes={{paper: classes.paper}}
            disableRestoreFocus
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}

        >
            <div className={classes.listContainer}>
                    <List className={classes.productList}>
                        {basketItems}
                    </List>
            </div>
            <Divider/>
            <Grid container className={classes.actionsContainer}>
                <Grid item xs={6}>
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        className={classes.checkoutBtn}
                        disabled={!basket.length}
                        component={(props) => <Link to="/checkout" {...props}/>}
                        onClick={handleCloseCart}
                    >
                        Checkout
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.price} align="right" gutterBottom variant="h6">
                        Total: <span className={classes.priceTag}>{totalPrice} UAH</span>
                    </Typography>
                </Grid>
            </Grid>

                        <Divider/>
        </Popover>
    );
};

const mapStateToProps = (state) => ({
    basket: state.basket.basket,
    totalPrice: state.basket.totalPrice
});

const mapDispatchToProps = (dispatch) => ({
    plusQuantity: (index) => dispatch(plusQuantity(index)),
    minusQuantity: (index) => dispatch(minusQuantity(index)),
    removeItem: (index) => dispatch(removeItemFromBasket(index))
});

export default withStyles(styles)( connect(mapStateToProps, mapDispatchToProps)(CartWidget) );