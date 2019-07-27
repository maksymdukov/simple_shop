import React, { useState } from "react";
import { Helmet } from "react-helmet/es/Helmet";
import PropTypes from "prop-types";

// MUI
import { withStyles } from "@material-ui/core";
import styles from "./styles";

// Components
import AdminSidebar from "../../../Components/Admins/Sidebar";
import LastOrders from "../LastOrders";

// Router
import { Route, withRouter } from "react-router";

const Panel = ({ classes, match }) => {
    const [isSibebarOpened, setIsSidebarOpened] = useState(true);
    return (
        <section className={classes.root}>
            <Helmet title="Manager panel" />
            <AdminSidebar
                isOpened={isSibebarOpened}
                onToggle={() => setIsSidebarOpened(!isSibebarOpened)}
            />
            <div className={classes.content}>
                <Route
                    path={`${match.url}/last-orders`}
                    component={LastOrders}
                />
            </div>
        </section>
    );
};

Panel.propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(Panel));
