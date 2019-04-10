import React, {Fragment, useEffect, useRef, useState} from 'react';
import MyToolbar from "../Navigation/MyToolbar";
import SideDrawer from "../Navigation/SideDrawer";
import classes from './index.module.css';

const Layout = ({children}) => {
    const headerEl = useRef(null);
    const [appbarPosition, setAppbarPosition] = useState("static");
    const [drawerOpened, setDrawerOpened] = useState(false);
    const handleDrawerClose = () => setDrawerOpened(false);
    const handleDrawerOpen = () => setDrawerOpened(true);

    const isElementVisible = (element) => {
        if (element.current) {
            const coords = element.current.getBoundingClientRect();
            return coords.bottom > 0;
        }
    };

    const onScrollListener = () => {
        const newPosition = isElementVisible(headerEl) ? "static" : "fixed";
            setAppbarPosition(newPosition);
    };

    useEffect(()=>{
        window.addEventListener('scroll', onScrollListener );
        return () => {
            window.removeEventListener('scroll', onScrollListener )
        }
    }, []);
        console.log(appbarPosition);
    return (
        <Fragment>
            <header ref={headerEl} className={classes.Header}>
                <MyToolbar position={appbarPosition} {...{handleDrawerOpen}} />
            </header>
            <SideDrawer {...{drawerOpened, handleDrawerClose}}/>
            <main>
                {children}
            </main>
        </Fragment>
    );
};

export default Layout;