import React, {Fragment} from 'react';
import styles from './style';
import {withStyles, Grid} from "@material-ui/core";
import IconLocation from '@material-ui/icons/Room';
import IconPhone from '@material-ui/icons/Phone';
import IconClock from '@material-ui/icons/AccessTime';
import Icon from '@mdi/react';
import {mdiYoutube, mdiFacebook, mdiInstagram} from '@mdi/js';

const Footer = ({classes,}) => {
    return (
        <Fragment>
            <Grid container className={classes.contacts}>
                <Grid item md={4} xs={12}>
                    <div className={classes.contactsInner}>
                        <IconLocation
                            fontSize="large"
                            color="primary"
                            className={classes.locationIcon}
                        />
                        <span className={classes.label}>Kyiv, Avtozavodskaya 29a</span>
                    </div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <div className={classes.contactsInner}>
                        <IconPhone
                            fontSize="large"
                            color="primary"
                            className={classes.phoneIcon}
                        />
                        <span className={classes.label}>+38 050 1234567</span>
                    </div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <div className={classes.contactsInner}>
                        <IconClock
                            fontSize="large"
                            color="primary"
                            className={classes.timeIcon}
                        />
                        <span className={classes.label}>00:00 - 24:00</span>
                    </div>
                </Grid>
            </Grid>
            <Grid container justify="center"  className={classes.socials}>
                <div>
                    <Icon path={mdiYoutube}
                          size={1.2}
                          className={classes.socialIcons}
                    />
                    <Icon path={mdiFacebook}
                          size={1.2}
                          className={classes.socialIcons}
                    />
                    <Icon path={mdiInstagram}
                          size={1.2}
                          className={classes.socialIcons}
                    />
                </div>
            </Grid>
            <Grid container justify="center" className={classes.sign}>
                <div>
                    XXXxxx (c) 2019. All rights reserved.
                </div>
            </Grid>
        </Fragment>
    );
};

export default withStyles(styles)(Footer);