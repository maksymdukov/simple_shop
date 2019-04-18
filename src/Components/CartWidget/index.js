import React from 'react';
import {
    Divider,
    List,
    Popover,
    Typography,
    withStyles,
    Grid, Button
} from "@material-ui/core";
import {connect} from "react-redux";
import CartWidgetItem from "./CartWidgetItem";
import {Link} from "react-router-dom";
import styles from './styles';
import {mapStateToProps, mapDispatchToProps} from "./redux";

const CartWidget = ({
                        classes,
                        anchorEl,
                        handleCloseCart,
                        basket,
                        plusQuantity,
                        minusQuantity,
                        removeItem,
                        totalPrice
                    }) => {
    let basketItems = basket.map((item, idx) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(CartWidget)
);