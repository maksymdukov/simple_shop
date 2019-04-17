import React, {useState} from 'react';
import {AppBar, Drawer, IconButton, withStyles} from "@material-ui/core";
import AdminSidebar from "../../../Components/Admins/Sidebar";
import NewOrders from "../NewOrders";

const styles = (theme) => ({
    root: {
        display: "flex",
    },
    content: {
        flex: 1,
        background: theme.palette.background.paper,
        position: "relative"
    },
    paper: {
        position: "sticky",
        overflow: "hidden"
    }
});

const Panel = ({classes}) => {
    const [isSibebarOpened, setIsSidebarOpened] = useState(true);
    const drawerClasses = [classes.sidebar];
    return (
        <section className={classes.root}>
            <AdminSidebar
                isOpened={isSibebarOpened}
                onToggle={() => setIsSidebarOpened(!isSibebarOpened)}
            />
            <div className={classes.content}>
                <NewOrders/>
            </div>
        </section>
    );
};

export default withStyles(styles)(Panel);