import React, {useState, Fragment} from 'react';
import MenuCard from "./MenuCard";
import classes from './index.module.css';
import {connect} from "react-redux";
import {addItemToBasket, minusQuantity, plusQuantity, removeItemFromBasket} from "../../store/actions/basketActions";
import {showMessage} from "../../store/actions/notificatorActions";
import BurgerCardModal from "./BurgerCardModal";
import {initIngredients} from "../../store/actions/burgerEditorActions";

const BurgersList = ({
                         type = 'normal',
                         list,
                         basket,
                         addItemToBasket,
                         removeItemFromBasket,
                         plusQuantity,
                         minusQuantity,
                         burgerEditorState,
                         initIngredients,
                         showMessage
}) => {
    const [modalState, setModalState] = useState({opened: false, item: {}});
    const openModal = (menuItem) => {
        setModalState({opened: true, item: menuItem});
    };
    const closeModal = () => {
        setModalState({...modalState, opened: false});
    };

    let cards, modal = null;
    if (list) {
        cards = list.map( menuItem => {
            const indexInBasket = basket.reduce( (acc, basketItem, basketIndex) => {
                return basketItem.name === menuItem.name ? basketIndex : acc;
            }, -1 );
            return (
                <MenuCard
                    key={menuItem.name}
                    itemObj={menuItem}
                    isInBasket={indexInBasket !== -1}
                    basketObj={basket[indexInBasket]}
                    onAreaClick={openModal}
                    {...{type, indexInBasket, addItemToBasket, removeItemFromBasket, plusQuantity, minusQuantity, showMessage}}
                />
            );
        } );
    }

    return (
        <Fragment>
            <div className={classes.BurgerList}>
                {cards}
            </div>
            {type === 'burger' && <BurgerCardModal
                opened={modalState.opened}
                handleClose={closeModal}
                item={modalState.item}
                {...{addItemToBasket, burgerEditorState, initIngredients}}
            />}
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    basket: state.basket.basket,
    burgerEditorState: state.burgerEditor
});

const mapDispatchToProps = (dispatch) => ({
    addItemToBasket: (item) => dispatch(addItemToBasket(item)),
    removeItemFromBasket: (index) => dispatch(removeItemFromBasket(index)),
    plusQuantity: (index) => dispatch(plusQuantity(index)),
    minusQuantity: (index) => dispatch(minusQuantity(index)),
    initIngredients: (ingredients, additives, initCost) => dispatch(initIngredients(ingredients, additives, initCost)),
    showMessage: (itemName) => dispatch(showMessage(itemName))

});

export default connect(mapStateToProps, mapDispatchToProps)(BurgersList);