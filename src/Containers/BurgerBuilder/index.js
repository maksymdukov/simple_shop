import React from 'react';
import BurgerEditor from "../../Components/BurgerEditor";
import {addIngredient, initIngredients, removeIngredient} from "../../store/actions/burgerEditorActions";
import {addItemToBasket} from "../../store/actions/basketActions";
import {connect} from "react-redux";
import AddToBasket from "../../Components/UI/Buttons/AddToBasket";

const BurgerBuilder = ({
                           ingredients,
                           addToBasket,
                           burgerCost,
                           additives,
                           initialCost,
                           initIngredients
}) => {
    const item = {
        name: 'Custom Burger',
        ingredients: ingredients,
        additives: additives,
        price: burgerCost,
        id: Date.now()
    };
    const handleAddToBasket = () => {
        addToBasket(item);
        initIngredients([],{}, initialCost)
    };
    return (
        <div style={{padding: "10px"}}>
            <BurgerEditor />
            <div style={{textAlign: "center"}}>
                <AddToBasket disabled={!ingredients.length} onClick={handleAddToBasket}>Добавить в корзину</AddToBasket>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    ingredients: state.burgerEditor.ingredients,
    additives: state.burgerEditor.additives,
    burgerCost: state.burgerEditor.burgerCost,
    initialCost: state.burgerEditor.menu.prices.initial
});

const mapDispatchToProps = (dispatch) => ({
    addToBasket: (item) => dispatch(addItemToBasket(item)),
    initIngredients: (ingredients, additives, initCost) => dispatch(initIngredients(ingredients, additives, initCost))
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);