import React, { useEffect, Suspense } from "react";
import PropTypes from "prop-types";

// MUI
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./Components/Layout";

// Router
import { Route, Switch, Redirect } from "react-router";

// Components
import Menu from "./Containers/Menu";
import BurgerBuilder from "./Containers/BurgerBuilder";
import Checkout from "./Containers/Checkout";
import MyOrders from "./Containers/MyOrders";
import Profile from "./Containers/Profile";
import Spinner from "./Components/UI/Spinner";
import Home from "./Containers/Home";
import About from "./Containers/About";

// Redux
import { connect } from "react-redux";
import { authCheckState } from "./store/actions/authActions";

const Panel = React.lazy(() => import("./Containers/Admins/Dashboard"));

const App = ({ isAuthenticated, subscribeAuthCheckState, isManager }) => {
    useEffect(() => {
        const unsubsribe = subscribeAuthCheckState();
        return () => {
            unsubsribe.then(unsub => {
                unsub();
            });
        };
    }, []);
    return (
        <div className="App">
            <CssBaseline />
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/menu" component={Menu} />
                    <Route path="/builder" component={BurgerBuilder} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/about" component={About} />
                    {isAuthenticated && (
                        <Route path="/orders" component={MyOrders} />
                    )}
                    {isAuthenticated && (
                        <Route path="/profile" component={Profile} />
                    )}
                    {isManager && (
                        <Suspense fallback={<Spinner />}>
                            <Route path="/manager-panel" component={Panel} />
                        </Suspense>
                    )}
                    <Route render={() => <Redirect to="/" />} />
                </Switch>
            </Layout>
        </div>
    );
};

App.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    subscribeAuthCheckState: PropTypes.func.isRequired,
    isManager: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: !state.auth.isAnonymous,
    isManager: state.auth.isManager
});
const mapDispatchToProps = dispatch => ({
    subscribeAuthCheckState: () => dispatch(authCheckState())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
