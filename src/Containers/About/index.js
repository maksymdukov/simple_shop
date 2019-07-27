import React, { Fragment } from "react";
import { Helmet } from "react-helmet/es/Helmet";
import PropTypes from "prop-types";

// MUI
import { Grid, Paper, Typography, withStyles } from "@material-ui/core";
import styles from "./styles";

// Assets
import aboutUsPic from "../../assets/o-nas.png";
import aboutUsPic2 from "../../assets/onas-2.jpg";
import aboutUsPic3 from "../../assets/o-nas-3.jpg";
import PersonIcon from "../../assets/images/Person-01.svg";

const About = ({ classes }) => {
    return (
        <Fragment>
            <Helmet title="About" />
            <Grid container className={classes.bestContainer}>
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h3"
                        component="h2"
                        className={classes.title}
                    >
                        The best burger delivery
                    </Typography>
                    <Typography variant="body1">
                        The Burger – was founded in 2012 in the city of Kiev,
                        Ukraine. Today it is delivery with one of the best
                        burgers in Ukraine. Key advantages of The Burger are
                        high quality products and carefully worked recipes. We
                        use high quality European cheeses, fresh meat without
                        freezing and our own organic buns!
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        src={aboutUsPic}
                        className={classes.aboutUsPic}
                        alt="about us"
                    />
                </Grid>
            </Grid>
            <Paper className={classes.paper}>
                <Grid container>
                    <Grid
                        item
                        md={4}
                        xs={12}
                        className={classes.statisticContainer}
                    >
                        <div className={classes.statisticWrapper}>
                            <Typography variant="h4" color="primary">
                                200,000
                            </Typography>
                            <Typography variant="body2">
                                burgers were sold since the company was found
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <div>
                            <img
                                src={aboutUsPic3}
                                className={classes.aboutUsPic}
                                alt="About us"
                            />
                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item md={4} xs={12}>
                        <div>
                            <img
                                src={aboutUsPic2}
                                className={classes.aboutUsPic}
                                alt="About us"
                            />
                        </div>
                    </Grid>
                    <Grid
                        item
                        md={8}
                        xs={12}
                        className={classes.burgerContainer}
                    >
                        <div className={classes.burger}>
                            <p>Father of the burger trend in Ukraine</p>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container>
                    {[
                        {
                            name: "John Doe",
                            position: "Co-Founder",
                            email: "mail@mail.com"
                        },
                        {
                            name: "John Doe",
                            position: "Co-Founder",
                            email: "mail@mail.com"
                        },
                        {
                            name: "John Doe",
                            position: "Co-Founder",
                            email: "mail@mail.com"
                        }
                    ].map((card, idx) => (
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            className={classes.personCard}
                            key={idx}
                        >
                            <img
                                src={PersonIcon}
                                className={classes.personIcon}
                                alt="Shareholder"
                            />
                            <Typography variant="h6">{card.name}</Typography>
                            <Typography
                                variant="body2"
                                className={classes.position}
                            >
                                {card.position}
                            </Typography>
                            <Typography className={classes.email}>
                                {card.email}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Fragment>
    );
};

About.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
