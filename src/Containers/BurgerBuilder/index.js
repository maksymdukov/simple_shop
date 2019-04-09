import React from 'react';
import BurgerEditor from "../../Components/BurgerEditor";
import {addIngredient, initIngredients, removeIngredient} from "../../store/actions/burgerEditorActions";
import {addItemToBasket} from "../../store/actions/basketActions";
import {connect} from "react-redux";
import AddToBasket from "../../Components/UI/Buttons/AddToBasket";

const mockIng = ["salad", "meat", "cheese", "cheese", "bacon"];

const BurgerBuilder = ({
                           ingredients,
                           addToBasket,
                           burgerCost,
                           additives
}) => {
    const item = {
        name: 'Custom Burger',
        ingredients: ingredients,
        additives: additives,
        price: burgerCost,
        id: Date.now()
    };
    return (
        <div>
            <BurgerEditor />
            <AddToBasket onClick={ ()=> addToBasket(item)}>Добавить в корзину</AddToBasket>
        </div>
    );
};

const mapStateToProps = (state) => ({
    ingredients: state.burgerEditor.ingredients,
    additives: state.burgerEditor.additives,
    burgerCost: state.burgerEditor.burgerCost
});

const mapDispatchToProps = (dispatch) => ({
    addToBasket: (item) => dispatch(addItemToBasket(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);