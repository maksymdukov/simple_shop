import React, {Component, useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import {CssBaseline} from "@material-ui/core";
import Layout from "./Components/Layout";
import {Route} from "react-router";
import Menu from "./Containers/Menu";
import BurgerBuilder from "./Containers/BurgerBuilder";
import Checkout from "./Containers/Checkout";
import {connect} from "react-redux";
import {authCheckState} from "./store/actions/authActions";

const App = ({checkAuthState, tryAutoSignIn}) => {
    useEffect(()=>{
        tryAutoSignIn();
    },[]);
    return (
        <div className="App">
            <CssBaseline/>
            <Layout>
                <Route path="/menu" component={Menu}/>
                <Route path="/builder" component={BurgerBuilder}/>
                <Route path="/checkout" component={Checkout}/>
            </Layout>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.token
});
const mapDispatchToProps = (dispatch) => ({
    tryAutoSignIn: () => dispatch( authCheckState() )
});

export default connect(mapStateToProps, mapDispatchToProps)(App);