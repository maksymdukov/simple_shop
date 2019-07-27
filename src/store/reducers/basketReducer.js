import {
    ADD_TO_BASKET,
    EDIT_BASKET_ITEM,
    MINUS_BASKET_ITEM,
    PLUS_BASKET_ITEM,
    PURCHASE_FAIL,
    PURCHASE_START,
    PURCHASE_SUCCESS,
    REMOVE_FROM_BASKET,
    RESET_PURCHASE_SUCCESS
} from "../actionTypes";

const localInitState = localStorage.getItem("cart");
const initialState = localInitState
    ? JSON.parse(localInitState)
    : {
          basket: [],
          totalPrice: 0,
          totalQuantity: 0,
          loading: false,
          error: null,
          success: false
      };

export const syncWithLocalStorage = (action, keyName, payload) => {
    if (action === "update") {
        localStorage.setItem(keyName, JSON.stringify(payload));
        return payload;
    }
    if (action === "remove") {
        localStorage.removeItem(keyName);
        return payload;
    }
};

const basketReducer = (state = initialState, { type, item, index, error }) => {
    switch (type) {
        case ADD_TO_BASKET:
            const basketItem = { ...item, quantity: 1 };

            return syncWithLocalStorage("update", "cart", {
                ...state,
                basket: state.basket.concat(basketItem),
                totalQuantity: state.totalQuantity + 1,
                totalPrice: state.totalPrice + item.price
            });
        case REMOVE_FROM_BASKET:
            return syncWithLocalStorage("update", "cart", {
                ...state,
                basket: state.basket.filter((_, idx) => idx !== index),
                totalQuantity:
                    state.totalQuantity - state.basket[index].quantity,
                totalPrice:
                    state.totalPrice -
                    state.basket[index].price * state.basket[index].quantity
            });
        case EDIT_BASKET_ITEM:
            return syncWithLocalStorage("update", "cart", {
                ...state,
                totalPrice:
                    state.totalPrice -
                    state.basket[index].price * state.basket[index].quantity +
                    item.price * state.basket[index].quantity,
                basket: state.basket.map((itm, idx) =>
                    idx === index ? item : itm
                )
            });
        case PLUS_BASKET_ITEM:
            const updatedItem = {
                ...state.basket[index],
                quantity: state.basket[index].quantity + 1
            };
            const updatedBasket = [...state.basket];
            updatedBasket[index] = updatedItem;
            return syncWithLocalStorage("update", "cart", {
                ...state,
                basket: updatedBasket,
                totalQuantity: state.totalQuantity + 1,
                totalPrice: state.totalPrice + state.basket[index].price
            });
        case MINUS_BASKET_ITEM:
            const updItem = {
                ...state.basket[index],
                quantity: state.basket[index].quantity - 1
            };
            let updBasket = [...state.basket];
            if (!updItem.quantity) {
                console.log("filter");
                console.log(index);
                updBasket = updBasket.filter((_, idx) => idx !== index);
            } else {
                updBasket[index] = updItem;
            }
            return syncWithLocalStorage("update", "cart", {
                ...state,
                basket: updBasket,
                totalQuantity: state.totalQuantity - 1,
                totalPrice: state.totalPrice - state.basket[index].price
            });
        case PURCHASE_START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case PURCHASE_SUCCESS:
            return syncWithLocalStorage("remove", "cart", {
                basket: [],
                totalPrice: 0,
                totalQuantity: 0,
                loading: false,
                success: true,
                error: null
            });
        case PURCHASE_FAIL:
            return {
                ...state,
                loading: false,
                error: error
            };
        case RESET_PURCHASE_SUCCESS:
            return {
                ...state,
                success: null,
                error: null
            };
        default:
            return state;
    }
};

export default basketReducer;
