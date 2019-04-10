import {
    ADD_BURGER_ADDITIVE,
    ADD_BURGER_INGREDIENT,
    INIT_BURGER_INGREDIENTS, REMOVE_BURGER_ADDITIVE,
    REMOVE_BURGER_INGREDIENT
} from "../actionTypes";

const initialState = {
    ingredients: [],
    additives: {},
    burgerCost: 40,
    menu: {
        mainIngredients: ['chicken', 'meat', 'bacon', 'cheese', 'salad', 'cucumber', 'tomato', 'onion'],
        additives: ['chilly sauce', 'cesar sauce', 'bbq sauce', 'cheese sauce'],
        prices: {
            initial: 40,
            salad: 10,
            chicken: 25,
            meat: 30,
            bacon: 50,
            cheese: 10,
            cucumber: 3,
            tomato: 5,
            onion: 3,
            'chilly sauce': 10,
            'cesar sauce': 12,
            'bbq sauce': 8,
            'cheese sauce': 11
        }
    }

};

const reducer = (state = initialState, {type, ingredients, additives, ingName, index, additiveName, burgerCost}) => {
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
      default:
          return state;
  }
};

export default reducer;