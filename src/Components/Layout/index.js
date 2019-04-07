import React, {Fragment, useState} from 'react';
import Toolbar from "../Navigation/MyToolbar";
import SideDrawer from "../Navigation/SideDrawer";

const Layout = ({children}) => {
    const [drawerOpened, setDrawerOpened] = useState(false);
    const handleDrawerClose = () => setDrawerOpened(false);
    const handleDrawerOpen = () => setDrawerOpened(true);
    return (
        <Fragment>
            <Toolbar {...{handleDrawerOpen}} />
            <SideDrawer {...{drawerOpened, handleDrawerClose}}/>
            <main>
                {children}
            </main>
        </Fragment>
    );
};

export default Layout;