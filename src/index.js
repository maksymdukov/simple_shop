import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';

// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
//
// const rootReducer = combineReducers({
//     burgerBuilder: burgerBuilderReducer,
//
// });
//
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// const app = (
//     <Provider store={store}>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </Provider>
// );

const app = (
        <BrowserRouter>
            <App />
        </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

