import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet/es/Helmet";

// MUI
import { IconButton, Typography, withStyles } from "@material-ui/core";
import IconArrowDown from "@material-ui/icons/ArrowDownwardRounded";
import styles from "./styles";

// Styles
import "animate.css/animate.min.css";

// Components
import Heading from "../../Components/UI/Heading";
import AddToBasket from "../../Components/UI/Buttons/AddToBasket";
import BurgersList from "../../Components/BurgerCardList";
import Spinner from "../../Components/UI/Spinner";

// Assets
import video from "../../assets/TheBurger_video_cover_03.mp4";

// Mock
import { BURGERS } from "./menuMock";

// Other
import { Element, scroller } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import { Scrollbar } from "swiper/dist/js/swiper.esm";

const Home = ({ classes, history }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const onVideoLoaded = e => {
        if (e.target.readyState >= 4) {
            if (!isLoaded) {
                setIsLoaded(true);
            }
        }
    };
    const handleIntroClick = () => {
        scroller.scrollTo("video", {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -80
        });
    };
    const handleMenuClick = () => {
        history.push("/menu");
    };
    const swiperConfig = {
        modules: [Scrollbar],
        centerInsufficientSlides: true,
        slideClass: classes.popularSlide,
        slidesPerView: "auto",
        spaceBetween: 30,
        freeMode: true,
        draggable: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false
        }
    };
    return (
        <Fragment>
            <Helmet title="Home" />
            <section className={classes.intro}>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn="bounceInRight"
                    animateOut="bounceOutLeft"
                >
                    <Heading
                        variant="h4"
                        color="primary"
                        component="h2"
                        className={classes.hungry}
                    >
                        Hungry?
                    </Heading>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn="bounceInRight"
                    animateOut="bounceOutLeft"
                    delay={1000}
                >
                    <Heading
                        variant="h4"
                        component="h3"
                        className={classes.something}
                    >
                        We've got something for you...
                    </Heading>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn="shake"
                    offset={50}
                    initiallyVisible={true}
                    delay={2000}
                >
                    <IconButton
                        className={classes.arrowDown}
                        onClick={handleIntroClick}
                    >
                        <IconArrowDown color="primary" />
                    </IconButton>
                </ScrollAnimation>
            </section>
            <Element name="video">
                <section className={classes.videoSection}>
                    {!isLoaded && <Spinner />}
                    <video
                        className={classes.video}
                        muted
                        loop
                        autoPlay
                        onCanPlayThrough={onVideoLoaded}
                        style={isLoaded ? {} : { display: "none" }}
                    >
                        <source src={video} />
                    </video>
                    {isLoaded && (
                        <div className={classes.videoHeader}>
                            <ScrollAnimation
                                animateIn="bounceInRight"
                                animateOut="bounceOutLeft"
                                delay={1000}
                                animateOnce={true}
                            >
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    color="inherit"
                                    gutterBottom
                                >
                                    It's time to have a bite
                                </Typography>
                                <AddToBasket
                                    className={classes.menuBtn}
                                    onClick={handleMenuClick}
                                >
                                    Menu
                                </AddToBasket>
                            </ScrollAnimation>
                        </div>
                    )}
                </section>
            </Element>
            <Heading variant="h4" color="primary" component="h2" gutterBottom>
                Our best offers
            </Heading>
            <BurgersList
                list={BURGERS.slice(0, 4)}
                type="burger"
                isInSwiper
                swiperProps={swiperConfig}
            />
        </Fragment>
    );
};

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
