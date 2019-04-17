import React, {useState} from 'react';
import {AppBar, Drawer, IconButton, withStyles} from "@material-ui/core";
import AdminSidebar from "../../../Components/Admins/Sidebar";
import LastOrders from "../LastOrders";
import {Route, withRouter} from "react-router";
import {Helmet} from "react-helmet/es/Helmet";

const styles = (theme) => ({
    root: {
        display: "flex",
    },
    content: {
        padding: 10,
        flex: 1,
        background: theme.palette.background.paper,
        position: "relative"
    },
    paper: {
        position: "sticky",
        overflow: "hidden"
    }
});

const Panel = ({classes, match}) => {
    const [isSibebarOpened, setIsSidebarOpened] = useState(true);
    const drawerClasses = [classes.sidebar];
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

export default withRouter(withStyles(styles)(Panel));