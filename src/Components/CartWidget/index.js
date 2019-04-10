import React from 'react';
import {ClickAwayListener, List, Menu, Paper, Popper, Typography} from "@material-ui/core";
import {plusQuantity, minusQuantity, removeItemFromBasket} from "../../store/actions/basketActions";
import {connect} from "react-redux";
import CartWidgetItem from "./CartWidgetItem";

const CartWidget = ({anchorEl, handleCloseCart, basket, plusQuantity, minusQuantity, removeItem, totalPrice}) => {
    let basketItems = basket.map((item,idx) => (
        <CartWidgetItem
            key={item.id || item.name}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            {...{idx, plusQuantity, minusQuantity, removeItem}}/>
    ));
    if (!basket.length) {
        basketItems = <p>Корзина пуста</p>;
    }

    return (
        <Popper
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseCart}
            placement="bottom-end"
            style={{zIndex: 2000}}
        >
            {()=>(
                <ClickAwayListener onClickAway={handleCloseCart}>
                    <Paper>
                        <List>
                            {basketItems}
                        </List>
                        <Typography align="center" gutterBottom variant="h6">
                            Общая стоимость: {totalPrice} ГРН
                        </Typography>
                    </Paper>
                </ClickAwayListener>
            )}
        </Popper>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartWidget);