import React, {useEffect, useState} from 'react';
import Swiper from 'react-id-swiper';
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core";
import 'react-id-swiper/src/styles/css/swiper.css';
import Card from "../CardList/Card";
import {Scrollbar} from "swiper/dist/js/swiper.esm";
import {minusQuantity, plusQuantity, removeItemFromBasket} from "../../../store/actions/basketActions";

const styles = (theme) => ({
    container: {
      marginTop: 20
    },
    card: {
        background: "inherit",
        width: 250,
        minWidth: 250,
        margin: "20px 0"
    }

});

const MySwiper = ({classes, basket, plusQuantity, minusQuantity, removeItem, openModal}) => {
    const [swiper, updateSwiper] = useState(null);
    useEffect(()=>{
        if (swiper) {
            swiper.update();
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

const mapStateToProps = (state) => ({
    basket: state.basket.basket
});
const mapDispatchToProps = (dispatch) => ({
    plusQuantity: (index) => dispatch(plusQuantity(index)),
    minusQuantity: (index) => dispatch(minusQuantity(index)),
    removeItem: (index) => dispatch(removeItemFromBasket(index))
});

export default withStyles(styles)( connect(mapStateToProps, mapDispatchToProps)(MySwiper) );