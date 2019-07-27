import React from "react";
import ReactDOM from "react-dom";

// Styles
import "./index.css";

// Components
import App from "./App";

// Redux
import Root from "./Root";

// Router
import { BrowserRouter } from "react-router-dom";

// MUI
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

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
        }
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
        useNextVariants: true
    }
});

export const BASENAME = "";

const app = (
    <Root>
        <BrowserRouter basename={BASENAME}>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </BrowserRouter>
    </Root>
);

ReactDOM.render(app, document.getElementById("root"));
