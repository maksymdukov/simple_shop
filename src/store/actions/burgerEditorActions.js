import {
    ADD_BURGER_ADDITIVE,
    ADD_BURGER_INGREDIENT, FETCH_INGREDIENTS_FAIL, FETCH_INGREDIENTS_START, FETCH_INGREDIENTS_SUCCESS,
    INIT_BURGER_INGREDIENTS, REMOVE_BURGER_ADDITIVE,
    REMOVE_BURGER_INGREDIENT
} from "../actionTypes";
import firebase from "../../firebase/config";

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

export const fetchIngredientsStart = () => ({
    type: FETCH_INGREDIENTS_START
});

export const fetchIngredientsFail = (error) => ({
    type: FETCH_INGREDIENTS_FAIL,
    error
});

export const fetchIngredientsSuccess = (menu) => ({
    type: FETCH_INGREDIENTS_SUCCESS,
    menu
});

export const fetchIngredients = () => {
    return async (dispatch, getState) => {
        console.log( !!getState().burgerEditor.menu );
        if (!getState().burgerEditor.menu) {
            dispatch( fetchIngredientsStart() );
            try {
                const snapshot = await firebase.database().ref('/menu/burgerBuilder').once('value');
                console.log(snapshot);
                if (!snapshot.exists()) throw new Error("Database problems");
                dispatch ( fetchIngredientsSuccess( snapshot.val() ) );
                return Promise.resolve(true);
            }
            catch (e) {
                console.log(e);
                dispatch(fetchIngredientsFail(e));
            }
        }
        return Promise.resolve(true);
    };
};