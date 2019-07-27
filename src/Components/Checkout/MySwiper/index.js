import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Components
import Swiper from "react-id-swiper";

// Modules
import { Scrollbar } from "swiper/dist/js/swiper.esm";

// Redux
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./redux";

// MUI
import { withStyles } from "@material-ui/core";

// Styles
import "react-id-swiper/lib/styles/css/swiper.css";
import styles from "./styles";

// Local components
import Card from "../Card";

const MySwiper = ({
    classes,
    basket,
    plusQuantity,
    minusQuantity,
    removeItem,
    openModal
}) => {
    const [swiper, updateSwiper] = useState(null);
    useEffect(() => {
        if (swiper) {
            swiper.update();
        }
    }, [basket]);
    const params = {
        getSwiper: updateSwiper,
        modules: [Scrollbar],
        centerInsufficientSlides: true,
        slideClass: classes.card,
        slidesPerView: "auto",
        spaceBetween: 50,
        freeMode: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false
        }
    };
    return (
        <Swiper {...params}>
            {basket.map((basketItem, ind) => (
                <div
                    key={basketItem.id || basketItem.name}
                    className={classes.card}
                >
                    <Card
                        {...{ basketItem }}
                        plusQuantity={() => plusQuantity(ind)}
                        minusQuantity={() => minusQuantity(ind)}
                        removeItem={() => removeItem(ind)}
                        handleEditBtnClick={() => openModal(ind, basketItem)}
                    />
                </div>
            ))}
        </Swiper>
    );
};

MySwiper.propTypes = {
    classes: PropTypes.object.isRequired,
    basket: PropTypes.array.isRequired,
    plusQuantity: PropTypes.func.isRequired,
    minusQuantity: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(MySwiper));
