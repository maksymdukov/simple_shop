import React from 'react';
import {Drawer} from "@material-ui/core";
import NavItems from "../NavItems";

const SideDrawer = ({drawerOpened, handleDrawerClose}) => {
    return (
        <Drawer
            open={drawerOpened}
            anchor="left"
            onClose={handleDrawerClose}
            onClick={handleDrawerClose}
        >
            <NavItems/>
        </Drawer>
    );
};

export default SideDrawer;