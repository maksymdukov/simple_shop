import {addItemToBasket, minusQuantity, plusQuantity, removeItemFromBasket} from "../../store/actions/basketActions";
import {initIngredients} from "../../store/actions/burgerEditorActions";
import {showNotification} from "../../store/actions/notificatorActions";

export const mapStateToProps = (state) => ({
    basket: state.basket.basket,
    burgerEditorState: state.burgerEditor
});

export const mapDispatchToProps = (dispatch) => ({
    addItemToBasket: (item) => dispatch(addItemToBasket(item)),
    removeItemFromBasket: (index) => dispatch(removeItemFromBasket(index)),
    plusQuantity: (index) => dispatch(plusQuantity(index)),
    minusQuantity: (index) => dispatch(minusQuantity(index)),
    initIngredients: (ingredients, additives, initCost) => dispatch(initIngredients(ingredients, additives, initCost)),
    showNotification: (itemName) => dispatch(showNotification(itemName))

});