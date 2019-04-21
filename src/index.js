import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import 'typeface-roboto';
import menuReducer from "./store/reducers/menuReducer";
import basketReducer from "./store/reducers/basketReducer";
import burgerEditorReducer from "./store/reducers/burgerEditorReducer";
import notificatorReducer from "./store/reducers/notificatorReducer";
import authReducer from "./store/reducers/authReducer";
import userOrdersReducer from "./store/reducers/userOrdersReducer";
import profileReducer from "./store/reducers/profileReducer";

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    menu: menuReducer,
    basket: basketReducer,
    burgerEditor: burgerEditorReducer,
    notificator: notificatorReducer,
    auth: authReducer,
    userOrders: userOrdersReducer,
    profile: profileReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#e91e63"
        },
        common: {
            white: "#fff",
            grey: "#c3c3c3",
            brightGrey: "#f3f3f3",
            brightBrown: "#e7d7cb",
            darkGrey: "#373737",
            brown: "rgb(139, 69, 19)"
        },
    },
    additionalColors: {
        success: "#33a828",
        dangerColor: "red",
        successLight: "#ffffff"
    },
    card: {
        price: {
            mainColor: "#fabf00"
        },
        frontSide: {
            backgroundColor: "#fff"
        },
        backSide: {
            dividerColor: "#bdbdbd",
            backgroundColor: "#212121",
            textColor: "#fff",
            textColorSecondary: "#e1e1e1",
            dangerColor: "red"
        }
    },
    typography: {
        useNextVariants: true,
    },
    // overrides: {
    //     MuiTypography: {
    //         h4: {
    //
    //         }
    //     }
    // }
});

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

