import React from 'react';
import {ButtonBase, withStyles} from "@material-ui/core";
import IconArrow from '@material-ui/icons/ArrowForward'
import {NavLink, withRouter} from "react-router-dom";
import styles from './styles';

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

export default withStyles(styles)( withRouter(AdminSidebar) );