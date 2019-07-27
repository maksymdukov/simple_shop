import React from "react";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers";

const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;


const initializeStore = initialState => createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

const Root = ({ children, initialState = {} }) => (
    <Provider store={initializeStore(initialState)}>{children}</Provider>
  );
  
  export default Root;