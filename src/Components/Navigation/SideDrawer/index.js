import React from 'react';
import {Divider, Drawer} from "@material-ui/core";
import NavItems from "../NavItems";
import HeadingDivider from "../../UI/HeadingDivider";
import NavItem from "../NavItems/NavItem";

const SideDrawer = ({drawerOpened, handleDrawerClose}) => {
    return (
        <Drawer
            open={drawerOpened}
            anchor="left"
            onClose={handleDrawerClose}
            onClick={handleDrawerClose}
        >
                <NavItems/>
            <Divider/>
            <section>
                <NavItem to="/checkout">Checkout</NavItem>
            </section>
        </Drawer>
    );
};

export default SideDrawer;