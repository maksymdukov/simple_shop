import React, {useEffect, useState} from 'react';
import Swiper from 'react-id-swiper';
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core";
import 'react-id-swiper/src/styles/css/swiper.css';
import Card from "../Card";
import {Scrollbar} from "swiper/dist/js/swiper.esm";
import styles from './styles'
import {mapStateToProps, mapDispatchToProps} from "./redux";

const MySwiper = ({
                      classes,
                      basket,
                      plusQuantity,
                      minusQuantity,
                      removeItem,
                      openModal
}) => {
    const [swiper, updateSwiper] = useState(null);
    useEffect(()=>{
        if (swiper) {
            swiper.update();
            // swiper.updateSize();
            // swiper.updateSlides();
            // swiper.updateSlidesClasses();
        }
    },[basket]);
    const params = {
        getSwiper: updateSwiper,
        modules: [Scrollbar],
        centerInsufficientSlides: true,
        slideClass: classes.card,
        slidesPerView: "auto",
        spaceBetween: 50,
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        }
    };
    return (
        <Swiper {...params}>
            {
                basket.map( (basketItem, ind) => (
                    <div key={basketItem.id || basketItem.name} className={classes.card}>
                        <Card
                            {...{basketItem}}
                            plusQuantity={()=>plusQuantity(ind)}
                            minusQuantity={()=>minusQuantity(ind)}
                            removeItem={()=>removeItem(ind)}
                            handleEditBtnClick={ () => openModal(ind, basketItem) }
                        />
                    </div>
                    ))
            }
        </Swiper>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(MySwiper)
);