import {
    addAdditive,
    addIngredient, fetchIngredients,
    initIngredients,
    removeAdditive,
    removeIngredient
} from "../../store/actions/burgerEditorActions";

export const mapStateToProps = (state) => ({
    ingredients: state.burgerEditor.ingredients,
    additives: state.burgerEditor.additives,
    menu: state.burgerEditor.menu,
    loading: state.burgerEditor.loading,
    error: state.burgerEditor.error
});

export const mapDispatchToProps = (dispatch) => ({
    initIngredients: (ingredients, additives, burgerCost) => dispatch(initIngredients(ingredients, additives, burgerCost)),
    addIngredient: (ingName) => dispatch(addIngredient(ingName)),
    removeIngredient: (index) => dispatch(removeIngredient(index)),
    addAdditive: (additiveName) => dispatch(addAdditive(additiveName)),
    removeAdditive: (additiveName) => dispatch(removeAdditive(additiveName)),
    fetchIngs: () => dispatch(fetchIngredients())
});