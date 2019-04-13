import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import red from '@material-ui/core/colors/red';
import 'typeface-roboto';
import menuReducer from "./store/reducers/menuReducer";
import basketReducer from "./store/reducers/basketReducer";
import burgerEditorReducer from "./store/reducers/burgerEditorReducer";
import notificatorReducer from "./store/reducers/notificatorReducer";
import authReducer from "./store/reducers/authReducer";

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    menu: menuReducer,
    basket: basketReducer,
    burgerEditor: burgerEditorReducer,
    notificator: notificatorReducer,
    auth: authReducer
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
            darkGrey: "#373737"
        },
    },
    additionalColors: {
        success: "#33a828"
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
        <BrowserRouter basename="/simple_shop/">
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

