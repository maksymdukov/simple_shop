import {
    ADD_BURGER_ADDITIVE,
    ADD_BURGER_INGREDIENT, FETCH_INGREDIENTS_FAIL, FETCH_INGREDIENTS_START, FETCH_INGREDIENTS_SUCCESS,
    INIT_BURGER_INGREDIENTS, REMOVE_BURGER_ADDITIVE,
    REMOVE_BURGER_INGREDIENT
} from "../actionTypes";

const initialState = {
    ingredients: [],
    additives: {},
    burgerCost: null,
    loading: false,
    error: null,
    menu: null

};

const reducer = (state = initialState, {type, error, menu, ingredients, additives, ingName, index, additiveName, burgerCost}) => {
  switch (type) {
      case INIT_BURGER_INGREDIENTS:
          return {
              ...state,
              ingredients,
              additives,
              burgerCost
          };
      case ADD_BURGER_INGREDIENT:
          return {
              ...state,
              ingredients: state.ingredients.concat(ingName),
              burgerCost: state.burgerCost + state.menu.prices[ingName]
          };
      case REMOVE_BURGER_INGREDIENT:
          return {
              ...state,
              ingredients: state.ingredients.filter((_,idx) => idx !== index ),
              burgerCost: state.burgerCost - state.menu.prices[state.ingredients[index]]
          };
      case ADD_BURGER_ADDITIVE:
          let updAdditives = {...state.additives};
          if (state.additives[additiveName]) {
              updAdditives[additiveName] = updAdditives[additiveName] + 1;
          } else {
              updAdditives[additiveName] = 1;
          }
          return {
              ...state,
              additives: updAdditives,
              burgerCost: state.burgerCost + state.menu.prices[additiveName]
          };
      case REMOVE_BURGER_ADDITIVE:
          let updatedAdditives = {...state.additives};
          if (state.additives[additiveName] === 1) {
              delete updatedAdditives[additiveName];
          } else {
              updatedAdditives[additiveName] = updatedAdditives[additiveName] - 1;
          }
          return {
              ...state,
              additives: updatedAdditives,
              burgerCost: state.burgerCost - state.menu.prices[additiveName]
          };
      case FETCH_INGREDIENTS_START:
          return {
              ...state,
              loading: true,
              error: null
          };
      case FETCH_INGREDIENTS_FAIL:
          return {
              ...state,
              loading: false,
              error
          };
      case FETCH_INGREDIENTS_SUCCESS:
          return {
              ...state,
              loading: false,
              menu,
              burgerCost: menu.prices.initial
          };
      default:
          return state;
  }
};

export default reducer;