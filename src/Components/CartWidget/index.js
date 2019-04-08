import React from 'react';
import {ClickAwayListener, List, Menu, Paper, Popper} from "@material-ui/core";
import {plusQuantity, minusQuantity, removeItemFromBasket} from "../../store/actions/basketActions";
import {connect} from "react-redux";
import CartWidgetItem from "./CartWidgetItem";

const CartWidget = ({anchorEl, handleCloseCart, basket, plusQuantity, minusQuantity, removeItem}) => {
    let basketItems = basket.map((item,idx) => (
        <CartWidgetItem
            key={item.name}
            name={item.name}
            quantity={item.quantity}
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
            placement="bottom"
        >
            {()=>(
                <ClickAwayListener onClickAway={handleCloseCart}>
                    <Paper>
                        <List>
                            {basketItems}
                        </List>
                    </Paper>
                </ClickAwayListener>
            )}
        </Popper>
    );
};

const mapStateToProps = (state) => ({
    basket: state.basket.basket
});

const mapDispatchToProps = (dispatch) => ({
    plusQuantity: (index) => dispatch(plusQuantity(index)),
    minusQuantity: (index) => dispatch(minusQuantity(index)),
    removeItem: (index) => dispatch(removeItemFromBasket(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartWidget);