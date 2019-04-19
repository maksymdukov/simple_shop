import React, {useState, Fragment} from 'react';
import MenuCard from "./MenuCard";
import {connect} from "react-redux";
import BurgerCardModal from "./BurgerCardModal";
import styles from './styles';
import {withStyles} from "@material-ui/core";
import {mapStateToProps, mapDispatchToProps} from "./redux";
import Swiper from 'react-id-swiper';

const BurgersList = ({
                         classes,
                         type = 'normal',
                         list,
                         basket,
                         addItemToBasket,
                         removeItemFromBasket,
                         plusQuantity,
                         minusQuantity,
                         burgerEditorState,
                         initIngredients,
                         showNotification,
                         isInSwiper,
                         swiperProps
}) => {
    const [modalState, setModalState] = useState({opened: false, item: {}});
    const openModal = (menuItem) => {
        setModalState({opened: true, item: menuItem});
    };
    const closeModal = () => {
        setModalState({...modalState, opened: false});
    };

    let cards = null;
    if (list) {
        cards = list.map( menuItem => {
            const indexInBasket = basket.reduce( (acc, basketItem, basketIndex) => {
                return basketItem.name === menuItem.name ? basketIndex : acc;
            }, -1 );
            return (
                <div className={isInSwiper ? swiperProps.slideClass : ""} key={menuItem.name}>
                    <MenuCard
                        itemObj={menuItem}
                        isInBasket={indexInBasket !== -1}
                        basketObj={basket[indexInBasket]}
                        onAreaClick={openModal}
                        {...{type, indexInBasket, addItemToBasket, removeItemFromBasket, plusQuantity, minusQuantity, showNotification}}
                    />
                </div>
            );
        } );
    }

    return (
        <Fragment>
            {isInSwiper
                ?   <Swiper {...swiperProps}>
                            {cards}
                    </Swiper>
                :   <div className={classes.list}>
                        {cards}
                    </div>
            }
            {type === 'burger' && <BurgerCardModal
                opened={modalState.opened}
                handleClose={closeModal}
                item={modalState.item}
                {...{addItemToBasket, burgerEditorState, initIngredients, showNotification}}
            />}
        </Fragment>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(BurgersList)
);