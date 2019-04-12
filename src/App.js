import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import {CssBaseline} from "@material-ui/core";
import Layout from "./Components/Layout";
import {Route} from "react-router";
import Menu from "./Containers/Menu";
import BurgerBuilder from "./Containers/BurgerBuilder";
import Checkout from "./Containers/Checkout";

class App extends Component {
  render() {
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
  }
}

export default App;
