import React, {useEffect, Suspense} from 'react';
import {CssBaseline} from "@material-ui/core";
import Layout from "./Components/Layout";
import {Route} from "react-router";
import Menu from "./Containers/Menu";
import BurgerBuilder from "./Containers/BurgerBuilder";
import Checkout from "./Containers/Checkout";
import {connect} from "react-redux";
import {authCheckState} from "./store/actions/authActions";
import MyOrders from "./Containers/MyOrders";
import Profile from "./Containers/Profile";
import Spinner from "./Components/UI/Spinner";

const Panel = React.lazy(() => import('./Containers/Admins/Dashboard'));

const App = ({isAuthenticated, checkAuthState, tryAutoSignIn, isManager}) => {
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
                {isAuthenticated && <Route path="/orders" component={MyOrders}/>}
                {isAuthenticated && <Route path="/profile" component={Profile}/>}
                {isManager &&
                    <Suspense fallback={<Spinner/>}>
                        <Route path="/manager-panel" component={Panel}/>
                    </Suspense>
                }
            </Layout>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: !state.auth.isAnonymous,
    isManager: state.auth.isManager
});
const mapDispatchToProps = (dispatch) => ({
    tryAutoSignIn: () => dispatch( authCheckState() )
});

export default connect(mapStateToProps, mapDispatchToProps)(App);