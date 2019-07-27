import { addItemToBasket } from "../../store/actions/basketActions";
import { initIngredients } from "../../store/actions/burgerEditorActions";
import { showNotification } from "../../store/actions/notificatorActions";

export const mapStateToProps = state => ({
    ingredients: state.burgerEditor.ingredients,
    additives: state.burgerEditor.additives,
    burgerCost: state.burgerEditor.burgerCost,
    menu: state.burgerEditor.menu
});

export const mapDispatchToProps = dispatch => ({
    addToBasket: item => dispatch(addItemToBasket(item)),
    initIngredients: (ingredients, additives, initCost) =>
        dispatch(initIngredients(ingredients, additives, initCost)),
    showNotification: itemName => dispatch(showNotification(itemName))
});
