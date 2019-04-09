import {
    ADD_BURGER_ADDITIVE,
    ADD_BURGER_INGREDIENT,
    INIT_BURGER_INGREDIENTS, REMOVE_BURGER_ADDITIVE,
    REMOVE_BURGER_INGREDIENT
} from "../actionTypes";

export const initIngredients = (ingredients, additives, burgerCost) => ({
    type: INIT_BURGER_INGREDIENTS,
    ingredients,
    additives,
    burgerCost
});

export const addIngredient = (ingName) => ({
    type: ADD_BURGER_INGREDIENT,
    ingName
});

export const removeIngredient = (index) => ({
    type: REMOVE_BURGER_INGREDIENT,
    index
});

export const addAdditive = (additiveName) => ({
    type: ADD_BURGER_ADDITIVE,
    additiveName
});

export const removeAdditive = (additiveName) => ({
    type: REMOVE_BURGER_ADDITIVE,
    additiveName
});