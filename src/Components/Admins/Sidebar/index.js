import React from "react";
import PropTypes from "prop-types";

// MUI
import { ButtonBase, withStyles } from "@material-ui/core";
import styles from "./styles";

// Icons
import IconArrow from "@material-ui/icons/ArrowForward";

// Router
import { NavLink, withRouter } from "react-router-dom";

const AdminSidebar = ({ classes, onToggle, isOpened, match }) => {
    const sidebarClasses = [classes.sidebar];
    const arrowClasses = [classes.arrow];
    if (!isOpened) {
        sidebarClasses.push(classes.sidebarClosed);
        arrowClasses.push(classes.rotate);
    }
    return (
        <aside className={sidebarClasses.join(" ")}>
            <ButtonBase className={classes.toggleBtnWrapper} onClick={onToggle}>
                <div className={classes.arrowWrapper}>
                    <IconArrow className={arrowClasses.join(" ")} />
                </div>
            </ButtonBase>
            <ul className={classes.list}>
                <li>
                    <NavLink
                        className={classes.route}
                        to={`${match.url}/last-orders`}
                        activeClassName={classes.activeRoute}
                    >
                        Orders Live
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
};

AdminSidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired,
    isOpened: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(AdminSidebar));
