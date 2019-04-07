import React from 'react';
import MenuCard from "./MenuCard";
import classes from './index.module.css';
import {connect} from "react-redux";
import {addItemToBasket, minusQuantity, plusQuantity, removeItemFromBasket} from "../../store/actions/basketActions";

const BurgersList = ({list, basket, addItemToBasket, removeItemFromBasket, plusQuantity, minusQuantity}) => {

    return (
        <div className={classes.BurgerList}>
            {list.map( menuItem => {
                const indexInBasket = basket.reduce( (acc, basketItem, basketIndex) => {
                    return basketItem.name === menuItem.name ? basketIndex : acc;
                }, -1 );
                return (
                        <MenuCard
                            key={menuItem.name}
                            itemObj={menuItem}
                            isInBasket={indexInBasket !== -1}
                            basketObj={basket[indexInBasket]}
                            {...{indexInBasket, addItemToBasket, removeItemFromBasket, plusQuantity, minusQuantity}}
                        />
                    );
            } )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    basket: state.basket.basket
});

const mapDispatchToProps = (dispatch) => ({
    addItemToBasket: (item) => dispatch(addItemToBasket(item)),
    removeItemFromBasket: (index) => dispatch(removeItemFromBasket(index)),
    plusQuantity: (index) => dispatch(plusQuantity(index)),
    minusQuantity: (index) => dispatch(minusQuantity(index))

});

export default connect(mapStateToProps, mapDispatchToProps)(BurgersList);