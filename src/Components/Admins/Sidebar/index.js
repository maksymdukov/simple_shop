import React from 'react';
import {ButtonBase, IconButton, withStyles} from "@material-ui/core";
import IconArrow from '@material-ui/icons/ArrowForward'

const styles = (theme) => ({
    sidebar: {
        position: "relative",
        top: 0,
        bottom: 0,
        width: 200,
        height: "100%",
        paddingRight: 30,
        transition: theme.transitions.create(['margin'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    sidebarClosed: {
        marginLeft: "-160px"
        // transform: "translateX(-160px)"
    },
    toggleBtnWrapper: {
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.grey,
        width: 40
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center"
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

const AdminSidebar = ({classes, onToggle, isOpened}) => {
    const sidebarClasses = [classes.sidebar];
    const arrowClasses = [classes.arrow];
    if (!isOpened) {
        sidebarClasses.push(classes.sidebarClosed);
        arrowClasses.push(classes.rotate)
    }
    return (
            <aside className={sidebarClasses.join(" ")}>
                <ButtonBase className={classes.toggleBtnWrapper} onClick={onToggle}>
                        <IconArrow className={arrowClasses.join(" ")}/>
                </ButtonBase>
                <div>dsflaskdfsadfsadf</div>
                <div>dsflaskdfsadfsadf</div>
                <div>dsflaskdfsadfsadf</div>
                <div>dsflaskdfsadfsadf</div>
                <div>dsflaskdfsadfsadf</div>
                <div>dsflaskdfsadfsadf</div>
                <div>dsflaskdfsadfsadf</div>

            </aside>
    );
};

export default withStyles(styles)(AdminSidebar);