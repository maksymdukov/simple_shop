import React from "react";
import PropTypes from "prop-types";

// MUI
import { Divider, Drawer } from "@material-ui/core";

// Local components
import NavItems from "../NavItems";
import NavItem from "../NavItems/NavItem";

const SideDrawer = ({ drawerOpened, handleDrawerClose }) => {
    return (
        <Drawer
            open={drawerOpened}
            anchor="left"
            onClose={handleDrawerClose}
            onClick={handleDrawerClose}
        >
            <NavItems />
            <Divider />
            <section>
                <NavItem to="/checkout">Checkout</NavItem>
            </section>
        </Drawer>
    );
};

SideDrawer.propTypes = {
    drawerOpened: PropTypes.bool.isRequired,
    handleDrawerClose: PropTypes.func.isRequired
};

export default SideDrawer;
