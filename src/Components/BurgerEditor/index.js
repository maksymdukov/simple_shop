import React, {useEffect} from 'react';
import Burger from "../Burger";
import BuildControls from "../Burger/BurgerControls";
import AdditiveControls from "../Burger/AdditiveControls";
import {addIngredient, initIngredients, removeIngredient, addAdditive, removeAdditive} from "../../store/actions/burgerEditorActions";
import {addItemToBasket} from "../../store/actions/basketActions";
import {connect} from "react-redux";

const BurgerEditor = ({
                          newIngredients,
                          newAdditives = {},
                          newCost,
                          ingredients,
                          additives,
                          ingredientsMenu,
                          additivesMenu,
                          initIngredients,
                          addIngredient,
                          removeIngredient,
                          addAdditive,
                          removeAdditive

}) => {
    useEffect(() => {
        if (newIngredients) initIngredients(newIngredients, newAdditives, newCost);
    },[]);
    return (
        <div>
            <Burger {...{ingredients, removeIngredient}}/>
            <BuildControls {...{addIngredient, ingredientsMenu}}/>
            <AdditiveControls {...{additivesMenu,additives, addAdditive, removeAdditive}}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    ingredients: state.burgerEditor.ingredients,
    additives: state.burgerEditor.additives,
    ingredientsMenu: state.burgerEditor.menu.mainIngredients,
    additivesMenu: state.burgerEditor.menu.additives,
});

const mapDispatchToProps = (dispatch) => ({
    initIngredients: (ingredients, additives, burgerCost) => dispatch(initIngredients(ingredients, additives, burgerCost)),
    addIngredient: (ingName) => dispatch(addIngredient(ingName)),
    removeIngredient: (index) => dispatch(removeIngredient(index)),
    addAdditive: (additiveName) => dispatch(addAdditive(additiveName)),
    removeAdditive: (additiveName) => dispatch(removeAdditive(additiveName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerEditor);