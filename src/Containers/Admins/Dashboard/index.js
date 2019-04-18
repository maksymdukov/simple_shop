import React, {useState} from 'react';
import {withStyles} from "@material-ui/core";
import AdminSidebar from "../../../Components/Admins/Sidebar";
import LastOrders from "../LastOrders";
import {Route, withRouter} from "react-router";
import {Helmet} from "react-helmet/es/Helmet";
import styles from './styles';

const Panel = ({classes, match}) => {
    const [isSibebarOpened, setIsSidebarOpened] = useState(true);
    return (
        <section className={classes.root}>
            <Helmet title="Manager panel"/>
            <AdminSidebar
                isOpened={isSibebarOpened}
                onToggle={() => setIsSidebarOpened(!isSibebarOpened)}
            />
            <div className={classes.content}>
                <Route path={`${match.url}/last-orders`} component={LastOrders}/>
            </div>
        </section>
    );
};

export default withStyles(styles)(
    withRouter(Panel)
);