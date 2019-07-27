import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";

// Local Components
import MenuCard from "./MenuCard";
import BurgerCardModal from "./BurgerCardModal";

// Redux
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./redux";

// MUI
import styles from "./styles";
import { withStyles } from "@material-ui/core";

// Components
import Swiper from "react-id-swiper";

const BurgersList = ({
    classes,
    type,
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
    const [modalState, setModalState] = useState({ opened: false, item: {} });
    const openModal = menuItem => {
        setModalState({ opened: true, item: menuItem });
    };
    const closeModal = () => {
        setModalState({ ...modalState, opened: false });
    };

    let cards = null;
    if (list) {
        cards = list.map(menuItem => {
            const indexInBasket = basket.reduce(
                (acc, basketItem, basketIndex) => {
                    return basketItem.name === menuItem.name
                        ? basketIndex
                        : acc;
                },
                -1
            );
            return (
                <div
                    className={isInSwiper ? swiperProps.slideClass : ""}
                    key={menuItem.name}
                >
                    <MenuCard
                        itemObj={menuItem}
                        isInBasket={indexInBasket !== -1}
                        basketObj={basket[indexInBasket]}
                        onAreaClick={openModal}
                        {...{
                            type,
                            indexInBasket,
                            addItemToBasket,
                            removeItemFromBasket,
                            plusQuantity,
                            minusQuantity,
                            showNotification,
                            isInSwiper
                        }}
                    />
                </div>
            );
        });
    }

    return (
        <Fragment>
            {isInSwiper ? (
                <Swiper {...swiperProps}>{cards}</Swiper>
            ) : (
                <div className={classes.list}>{cards}</div>
            )}
            {type === "burger" && (
                <BurgerCardModal
                    opened={modalState.opened}
                    handleClose={closeModal}
                    item={modalState.item}
                    {...{
                        addItemToBasket,
                        burgerEditorState,
                        initIngredients,
                        showNotification
                    }}
                />
            )}
        </Fragment>
    );
};

BurgersList.defaultProps = {
    type: "normal"
};

BurgersList.propTypes = {
    classes: PropTypes.object.isRequired,
    list: PropTypes.array,
    basket: PropTypes.array.isRequired,
    addItemToBasket: PropTypes.func.isRequired,
    removeItemFromBasket: PropTypes.func.isRequired,
    plusQuantity: PropTypes.func.isRequired,
    minusQuantity: PropTypes.func.isRequired,
    burgerEditorState: PropTypes.object.isRequired,
    initIngredients: PropTypes.func.isRequired,
    showNotification: PropTypes.func.isRequired,
    isInSwiper: PropTypes.bool,
    swiperProps: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(BurgersList));
