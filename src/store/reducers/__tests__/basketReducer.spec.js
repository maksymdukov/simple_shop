import basketReducer, { syncWithLocalStorage } from "../basketReducer";
import {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    EDIT_BASKET_ITEM,
    PLUS_BASKET_ITEM,
    MINUS_BASKET_ITEM,
    PURCHASE_START,
    PURCHASE_SUCCESS,
    PURCHASE_FAIL,
    RESET_PURCHASE_SUCCESS
} from "../../actionTypes";

const initialState = {
    basket: [],
    totalPrice: 0,
    totalQuantity: 0,
    loading: false,
    error: null,
    success: false
};

class LocalStorageMock {
    constructor() {
        this.store = {};
    }

    clear() {
        this.store = {};
    }

    getItem(key) {
        return this.store[key] || null;
    }

    setItem(key, value) {
        this.store[key] = value.toString();
    }

    removeItem(key) {
        delete this.store[key];
    }
}

global.localStorage = new LocalStorageMock();

describe("Cart reducer", () => {
    beforeEach(() => {
        global.localStorage = new LocalStorageMock();
    });

    it("should synchronize store with the localStorage", () => {
        syncWithLocalStorage("update", "cart", { item: 1 });
        expect(localStorage.getItem("cart")).toEqual(
            JSON.stringify({ item: 1 })
        );
        syncWithLocalStorage("remove", "cart");
        expect(localStorage.getItem("cart")).toEqual(null);
    });

    it("should return the initial state", () => {
        expect(basketReducer(undefined, {})).toEqual(initialState);
    });

    it("should add item to the cart", () => {
        const itemMock = {
            price: 10
        };
        expect(
            basketReducer(undefined, { type: ADD_TO_BASKET, item: itemMock })
        ).toEqual({
            ...initialState,
            basket: [{ price: 10, quantity: 1 }],
            totalPrice: 10,
            totalQuantity: 1
        });
    });

    it("should remove item from the cart", () => {
        const mockInitState = {
            ...initialState,
            basket: [{ price: 10, quantity: 1 }],
            totalPrice: 10,
            totalQuantity: 1
        };
        expect(
            basketReducer(mockInitState, { type: REMOVE_FROM_BASKET, index: 0 })
        ).toEqual({
            ...initialState,
            basket: [],
            totalPrice: 0,
            totalQuantity: 0
        });
    });

    it("should edit cart item", () => {
        const mockInitState = {
            ...initialState,
            basket: [{ price: 10, quantity: 1 }],
            totalPrice: 10,
            totalQuantity: 1
        };
        expect(
            basketReducer(mockInitState, {
                type: EDIT_BASKET_ITEM,
                index: 0,
                item: { price: 20, quantity: 3 }
            })
        ).toEqual({
            ...initialState,
            basket: [{ price: 20, quantity: 3 }],
            totalPrice: 20,
            totalQuantity: 1
        });
    });

    it("should increase a quantity by 1 of a particular item", () => {
        const mockInitState = {
            ...initialState,
            basket: [{ price: 10, quantity: 1 }],
            totalPrice: 10,
            totalQuantity: 1
        };
        expect(
            basketReducer(mockInitState, { type: PLUS_BASKET_ITEM, index: 0 })
        ).toEqual({
            ...initialState,
            basket: [{ price: 10, quantity: 2 }],
            totalPrice: 20,
            totalQuantity: 2
        });
    });

    it("should subtract by 1 a quantity of a particular item", () => {
        const mockInitState = {
            ...initialState,
            basket: [{ price: 10, quantity: 2 }],
            totalPrice: 20,
            totalQuantity: 2
        };
        expect(
            basketReducer(mockInitState, { type: MINUS_BASKET_ITEM, index: 0 })
        ).toEqual({
            ...initialState,
            basket: [{ price: 10, quantity: 1 }],
            totalPrice: 10,
            totalQuantity: 1
        });
    });

    it("handles purchase request", () => {
        expect(basketReducer(initialState, { type: PURCHASE_START })).toEqual({
            ...initialState,
            loading: true,
            error: null
        });
    });

    it("handles successful purchase", () => {
        expect(basketReducer(initialState, { type: PURCHASE_SUCCESS })).toEqual(
            {
                ...initialState,
                basket: [],
                totalPrice: 0,
                totalQuantity: 0,
                loading: false,
                success: true,
                error: null
            }
        );
    });

    it("handles failed purchase request", () => {
        expect(
            basketReducer(initialState, {
                type: PURCHASE_FAIL,
                error: { code: 404 }
            })
        ).toEqual({
            ...initialState,
            loading: false,
            error: { code: 404 }
        });
    });

    it("resets purchase status and errors", () => {
        const initState = { ...initialState, error: { code: 404 } };
        expect(
            basketReducer(
                initState,
                { type: RESET_PURCHASE_SUCCESS, error: { code: 404 } }
            )
        ).toEqual({
            ...initialState,
            success: null,
            error: null
        });
    });
});
