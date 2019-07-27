import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
    signUpStart,
    testAction,
    signUp,
    signIn,
    authCheckState
} from "../authActions";
import {
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    SIGN_IN_START,
    SIGN_IN_FAIL
} from "../../actionTypes";

// Firebase mock
jest.mock("../../../firebase/config", () => {
    return {
        auth: function auth() {
            auth.Auth = { Persistence: { LOCAL: null } };
            return {
                setPersistence() {
                    return Promise.resolve();
                },
                createUserWithEmailAndPassword(email) {
                    if (email === "existingEmail") {
                        return Promise.reject({ code: "error" });
                    }
                    return Promise.resolve({ user: { uid: "someuid" } });
                },
                signInWithEmailAndPassword(email) {
                    if (email === "someEmail") {
                        return Promise.resolve(email);
                    }
                    return Promise.reject({ message: "Wrong email" });
                },
                onAuthStateChanged(cb) {
                    cb({
                        isAnonymous: false,
                        email: "someEmail",
                        uid: "someUid",
                        getIdToken() {
                            return "someToken";
                        }
                    });
                    return Promise.resolve();
                }
            };
        },
        database() {
            return {
                ref() {
                    return this;
                },
                set() {
                    return Promise.resolve();
                },
                once() {
                    return {
                        val() {
                            return false;
                        }
                    };
                }
            };
        }
    };
});

// Configure store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Auth action creator", () => {
    afterEach(() => {
        localStorage.removeItem("expirationDate");
    });

    it("should create an action when starting signing up", () => {
        expect(signUpStart()).toEqual({ type: SIGN_UP_START });
    });

    it("should dispatch 2 actions when successfully signed up", () => {
        const expectedActions = [
            { type: SIGN_UP_START },
            { type: SIGN_UP_SUCCESS }
        ];

        const store = mockStore();
        return store.dispatch(signUp()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("should dispatch 2 actions when signing up fails", () => {
        const expectedActions = [
            { type: SIGN_UP_START },
            { type: SIGN_UP_FAIL, error: { code: "error" } }
        ];

        const store = mockStore();
        return store.dispatch(signUp("existingEmail")).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("should dispatch an action and return true when sign in is successfull", () => {
        const expectedActions = [{ type: SIGN_IN_START }];

        const store = mockStore();
        return store.dispatch(signIn("someEmail")).then(result => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
            expect(result).toEqual(true);
        });
    });

    it("should dispatch 2 actions when signing in fails", () => {
        const expectedActions = [
            { type: SIGN_IN_START },
            { type: SIGN_IN_FAIL, error: { message: "Wrong email" } }
        ];

        const store = mockStore();
        return store.dispatch(signIn("wrongEmail")).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("should dispatch several actions when authentication status changes", () => {
        const expectedActions = [
            { type: "SIGN_IN_START" },
            {
                email: "someEmail",
                isAnonymous: false,
                token: "someToken",
                type: "SIGN_IN_SUCCESS",
                uid: "someUid"
            },
            { type: "PROFILE_LOAD_START" },
            { profile: false, type: "PROFILE_LOAD_SUCCESS" }
        ];

        const store = mockStore();
        return store.dispatch(authCheckState()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
