import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Helmet} from "react-helmet/es/Helmet";
import MyToolbar from "../Navigation/MyToolbar";
import SideDrawer from "../Navigation/SideDrawer";
import classes from './index.module.css';
import Notificator from "../Notificator";
import {Typography,withStyles} from "@material-ui/core";

const TITLE_PREFIX = "MySite.com - ";

const styles = (theme) => ({
    header: {
        height: 200,
        backgroundImage: "url(https://mrgrill.com.ua/wp-content/uploads/2017/09/banner.jpg)",
        backgroundSize: "cover",
        position: "relative"
    },
    pageTitle: {
        position: "absolute",
        bottom: 20,
        width: "100%",
        fontWeight: 100,
        // fontStyle: "italic",
        color: theme.palette.common.grey
    },
    main: {
        marginBottom: theme.spacing.unit * 5
    }
});

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
        </Fragment>
    );
};

export default withStyles(styles)(Layout);