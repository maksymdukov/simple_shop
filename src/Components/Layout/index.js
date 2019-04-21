import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Helmet} from "react-helmet/es/Helmet";
import MyToolbar from "../Navigation/MyToolbar";
import SideDrawer from "../Navigation/SideDrawer";
import Notificator from "../Notificator";
import {Typography,withStyles} from "@material-ui/core";
import styles from './styles';
import Footer from "./Footer";

const TITLE_PREFIX = "MySite.com - ";

const BGIMAGE_MAP = {
    'default': "https://mrgrill.com.ua/wp-content/uploads/2017/09/banner.jpg",
    "Home": "https://mrgrill.com.ua/wp-content/uploads/2017/09/bg_about-1.jpg",
    "Menu": "https://mrgrill.com.ua/wp-content/uploads/2017/09/banner.jpg",
    "Burger Builder": "https://mrgrill.com.ua/wp-content/uploads/2017/09/banner.jpg",
    "Checkout": "https://mrgrill.com.ua/wp-content/uploads/2017/09/banner.jpg",
    "About": "https://mrgrill.com.ua/wp-content/uploads/2017/09/bg_contacts.jpg",
    "Contacts": "https://mrgrill.com.ua/wp-content/uploads/2017/09/bg_contacts.jpg",
    "My orders": "https://mrgrill.com.ua/wp-content/uploads/2017/09/banner.jpg",
};

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
            <Helmet
                titleTemplate={`${TITLE_PREFIX}%s`}
                onChangeClientState={(newState) => newState.title ? setTitle(newState.title.split(TITLE_PREFIX)[1]) : setTitle("")}
            />
            <header
                ref={headerEl}
                className={classes.header}
                style={{backgroundImage: `url(${BGIMAGE_MAP[title] || BGIMAGE_MAP.default})`}}
            >
                <MyToolbar position={appbarPosition} {...{handleDrawerOpen}} />
                <Typography align="center" variant="h3" component="h1" className={classes.pageTitle}>{title && title}</Typography>
            </header>
            <SideDrawer {...{drawerOpened, handleDrawerClose}}/>
            <Notificator/>
            <main className={classes.main}>
                {children}
            </main>
            <footer className={classes.footer}>
                <Footer/>
            </footer>
        </Fragment>
    );
};

export default withStyles(styles)(Layout);