import authReducer, { initState } from "../authReducer";
import {
    SIGN_UP_START,
    SIGN_IN_SUCCESS,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    RESET_ERRORS,
    SIGN_IN_START,
    SIGN_IN_FAIL,
    SET_IS_MANAGER,
    LOGOUT
} from "../../actionTypes";

describe("Authentication reducer", () => {
    it("Should return the initial state", () => {
        expect(authReducer(undefined, {})).toEqual(initState);
    });

    it("handles sign up request", () => {
        expect(authReducer(initState, { type: SIGN_UP_START })).toEqual({
            ...initState,
            signUpLoading: true,
            signUpSuccess: null,
            signUpError: null
        });
    });

    it("handles successful sign up", () => {
        expect(authReducer(initState, { type: SIGN_UP_SUCCESS })).toEqual({
            ...initState,
            signUpLoading: false,
            signUpSuccess: true,
            signUpError: null
        });
    });

    it("handles sign up failure", () => {
        expect(
            authReducer(initState, { type: SIGN_UP_FAIL, error: {} })
        ).toEqual({
            ...initState,
            signUpLoading: false,
            signUpError: {}
        });
    });

    it("correctly resets errors", () => {
        const mockState = { ...initState, signUpError: {}, signInError: {} };
        expect(authReducer(mockState, { type: RESET_ERRORS })).toEqual(
            initState
        );
    });

    it("handles sign in request", () => {
        expect(authReducer(initState, { type: SIGN_IN_START })).toEqual({
            ...initState,
            signInLoading: true,
            signUpSuccess: null,
            signUpError: null,
            signInError: null
        });
    });

    it("handles successful sign in", () => {
        const action = {
            type: SIGN_IN_SUCCESS,
            uid: 'someuniqid',
            email: 'email@email.com',
            isAnonymous: 'false',
            token: 'sometoken'
        };
        expect(authReducer(initState, action)).toEqual({
            ...initState,
            signInLoading: false,
            signInError: false,
            uid: 'someuniqid',
            email: 'email@email.com',
            isAnonymous: 'false',
            token: 'sometoken'
        });
    });

    it("handles sign in failure", () => {
        const action = {
            type: SIGN_IN_FAIL,
            error: {}
        };
        expect(authReducer(initState, action)).toEqual({
            ...initState,
            signInLoading: false,
            signInError: {}
        });
    });

    it("handles setting manager level of access", () => {
        const action = {
            type: SET_IS_MANAGER,
        };
        expect(authReducer(initState, action)).toEqual({
            ...initState,
            isManager: true
        });
    });

    it("handles user logout", () => {
        const action = {
            type: LOGOUT,
        };
        expect(authReducer(initState, action)).toEqual(initState);
    });
});
