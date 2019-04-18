import {addItemToBasket, editBasketItem, makePurchase, resetPurchaseSuccess} from "../../store/actions/basketActions";
import {initIngredients} from "../../store/actions/burgerEditorActions";

export const mapStateToProps = (state) => ({
    basket: state.basket.basket,
    burgerEditorState: state.burgerEditor,
    totalPrice: state.basket.totalPrice,
    isSuccess: state.basket.success,
    isPurchasing: state.basket.loading,
    isErrorPurchasing: state.basket.error,
    profile: state.profile.profile
});
export const mapDispatchToProps = (dispatch) => ({
    addItemToBasket: (item) => dispatch(addItemToBasket(item)),
    initIngredients: (ingredients, additives, initCost) => dispatch(initIngredients(ingredients, additives, initCost)),
    editBasketItem: (index, newItem) => dispatch(editBasketItem(index, newItem)),
    resetSuccessStatus: () => dispatch(resetPurchaseSuccess()),
    makePurchase: (contactData) => dispatch(makePurchase(contactData))
});