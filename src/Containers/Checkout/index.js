import React, {useState, Fragment} from 'react';
import {Helmet} from "react-helmet/es/Helmet";
import {connect} from "react-redux";
import MySwiper from "../../Components/Checkout/MySwiper";
import {Typography, withStyles} from "@material-ui/core";
import BurgerCardModal from "../../Components/BurgerCardList/BurgerCardModal";
import {addItemToBasket, editBasketItem} from "../../store/actions/basketActions";
import {initIngredients} from "../../store/actions/burgerEditorActions";

const styles = (theme) => ({
    orders: {
        margin: "20px 5px"
    }
});

const Checkout = ({
                      classes,
                      basket,
                      totalPrice,
                      burgerEditorState,
                      initIngredients,
                      editBasketItem
                  }) => {
    const [modalState, setModalState] = useState({opened: false, item: {}, indexInBasket: null});
    const openModal = (indexInBasket, activeItem) => {
        setModalState({
            opened: true,
            item: activeItem,
            indexInBasket: indexInBasket
        });
    };
    const closeModal = () => {
        setModalState({...modalState, opened: false});
    };
    return (
        <div>
            <Helmet>
                <title>Checkout</title>
            </Helmet>
            <section className={classes.orders}>
                {basket.length
                    ? (
                        <Fragment>
                            <MySwiper {...{openModal}}/>
                            <BurgerCardModal
                                opened={modalState.opened}
                                handleClose={closeModal}
                                item={modalState.item}
                                indexToEdit={modalState.indexInBasket}
                                isEditMode={true}
                                {...{editBasketItem, burgerEditorState, initIngredients}}
                            />
                        </Fragment>
                        )
                    : <Typography variant="h3" component="h3" align="center">
                        Cart is empty.
                    </Typography>
                }

            </section>
            <Typography variant="h3" component="h3" color="primary" align="center">
                {totalPrice} UAH
            </Typography>
            <Typography variant="subheading" component="p" color="primary" align="center">
                Total amount to pay
            </Typography>
        </div>
    );
};

const mapStateToProps = (state) => ({
    basket: state.basket.basket,
    burgerEditorState: state.burgerEditor,
    totalPrice: state.basket.totalPrice
});
const mapDispatchToProps = (dispatch) => ({
    addItemToBasket: (item) => dispatch(addItemToBasket(item)),
    initIngredients: (ingredients, additives, initCost) => dispatch(initIngredients(ingredients, additives, initCost)),
    editBasketItem: (index, newItem) => dispatch(editBasketItem(index, newItem))
});

export default withStyles(styles)( connect(mapStateToProps, mapDispatchToProps)(Checkout) );