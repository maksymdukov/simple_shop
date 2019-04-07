import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import {CssBaseline} from "@material-ui/core";
import Layout from "./Components/Layout";
import {Route} from "react-router";
import Menu from "./Containers/Menu";

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <CssBaseline/>
        <Layout>
            <Route path="/menu" component={Menu}/>
        </Layout>
      </div>
    );
  }
}

export default App;
