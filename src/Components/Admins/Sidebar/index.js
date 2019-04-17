import React from 'react';
import {ButtonBase, IconButton, withStyles} from "@material-ui/core";
import IconArrow from '@material-ui/icons/ArrowForward'
import {NavLink, withRouter} from "react-router-dom";

const styles = (theme) => ({
    sidebar: {
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 7}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
        position: "relative",
        top: 0,
        bottom: 0,
        width: 200,
        minHeight: "100%",
        transition: theme.transitions.create(['margin'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        display: "flex",
        flexDirection: "column",
    },
    sidebarClosed: {
        marginLeft: "-160px"
        // transform: "translateX(-160px)"
    },
    list: {
        listStyle: "none",
        paddingLeft: 0
    },
    route:{
        borderBottom: `1px solid transparent`,
        textDecoration: "none",
        display: "inline-block",
        color: "inherit",
        transition: "color .2s linear",
        '&:link, &:active': {
            textDecoration: "none",
            color: "inherit"
        },
        '&:hover': {
            textDecoration: "none",
            color: theme.palette.primary.main
        }
    },
    activeRoute :{
        color: "red",
        borderBottom: `1px solid ${theme.palette.primary.main}`
    },
    toggleBtnWrapper: {
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.grey,
        width: 40,
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    arrowWrapper:{
        position: "sticky",
        top: 150
    },
    arrow: {
        position: "sticky",
        top: 0,
        transition: theme.transitions.create(['transform'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.standard,
        })
    },
    rotate: {
        transform: "rotate(180deg)"
    }

});

const AdminSidebar = ({classes, onToggle, isOpened, match}) => {
    const sidebarClasses = [classes.sidebar];
    const arrowClasses = [classes.arrow];
    if (!isOpened) {
        sidebarClasses.push(classes.sidebarClosed);
        arrowClasses.push(classes.rotate)
    }
    return (
            <aside className={sidebarClasses.join(" ")}>
                <ButtonBase className={classes.toggleBtnWrapper}  onClick={onToggle}>
                    <div className={classes.arrowWrapper}>
                            <IconArrow className={arrowClasses.join(" ")}/>
                    </div>
                </ButtonBase>
                <ul className={classes.list}>
                    <li>
                        <NavLink className={classes.route} to={`${match.url}/last-orders`} activeClassName={classes.activeRoute}>
                            Orders Live
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={classes.route} to={`${match.url}/orders`} activeClassName={classes.activeRoute}>
                            Orders
                        </NavLink>
                    </li>
                </ul>
            </aside>
    );
};

export default withRouter(withStyles(styles)(AdminSidebar));