import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Helmet} from "react-helmet/es/Helmet";
import MyToolbar from "../Navigation/MyToolbar";
import SideDrawer from "../Navigation/SideDrawer";
import Notificator from "../Notificator";
import {Typography,withStyles} from "@material-ui/core";
import styles from './styles';

const TITLE_PREFIX = "MySite.com - ";

const Layout = ({classes, children}) => {
    const headerEl = useRef(null);
    const [appbarPosition, setAppbarPosition] = useState("static");
    const [drawerOpened, setDrawerOpened] = useState(false);
    const [title, setTitle] = useState("Home");
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

    return (
        <Fragment>
            <Helmet titleTemplate={`${TITLE_PREFIX}%s`} onChangeClientState={(newState) => setTitle(newState.title)}/>
            <header ref={headerEl} className={classes.header}>
                <MyToolbar position={appbarPosition} {...{handleDrawerOpen}} />
                <Typography align="center" variant="h3" component="h1" className={classes.pageTitle}>{title && title.split(TITLE_PREFIX)[1]}</Typography>
            </header>
            <SideDrawer {...{drawerOpened, handleDrawerClose}}/>
            <Notificator/>
            <main className={classes.main}>
                {children}
            </main>
            <footer className={classes.footer}>

            </footer>
        </Fragment>
    );
};

export default withStyles(styles)(Layout);