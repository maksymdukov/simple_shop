import React, { Fragment } from "react";
import PropTypes from "prop-types";

// Styles
import styles from "./style";

// MUI
import { withStyles, Grid } from "@material-ui/core";

// Icons
import IconLocation from "@material-ui/icons/Room";
import IconPhone from "@material-ui/icons/Phone";
import IconClock from "@material-ui/icons/AccessTime";
import Icon from "@mdi/react";
import { mdiYoutube, mdiFacebook, mdiInstagram } from "@mdi/js";

const Footer = ({ classes }) => {
    return (
        <Fragment>
            <div className={classes.contacts}>
                <div className={classes.contactContainer}>
                    <div className={classes.contactItemWrapper}>
                        <IconLocation
                            fontSize="large"
                            color="primary"
                            className={classes.contactIcon}
                        />
                        <span className={classes.label}>
                            Kyiv, Avtozavodskaya 29a
                        </span>
                    </div>

                    <div className={classes.contactItemWrapper}>
                        <IconPhone
                            fontSize="large"
                            color="primary"
                            className={classes.contactIcon}
                        />
                        <span className={classes.label}>+38 050 1234567</span>
                    </div>

                    <div className={classes.contactItemWrapper}>
                        <IconClock
                            fontSize="large"
                            color="primary"
                            className={classes.contactIcon}
                        />
                        <span className={classes.label}>00:00 - 24:00</span>
                    </div>
                </div>
            </div>
            <Grid container justify="center" className={classes.socials}>
                <div>
                    <Icon
                        path={mdiYoutube}
                        size={1.2}
                        className={classes.socialIcons}
                    />
                    <Icon
                        path={mdiFacebook}
                        size={1.2}
                        className={classes.socialIcons}
                    />
                    <Icon
                        path={mdiInstagram}
                        size={1.2}
                        className={classes.socialIcons}
                    />
                </div>
            </Grid>
            <Grid container justify="center" className={classes.sign}>
                <div>XXXxxx (c) 2019. All rights reserved.</div>
            </Grid>
        </Fragment>
    );
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
