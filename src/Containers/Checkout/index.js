import React, {useState, Fragment, useEffect} from 'react';
import {Helmet} from "react-helmet/es/Helmet";
import {connect} from "react-redux";
import MySwiper from "../../Components/Checkout/MySwiper";
import {Typography, withStyles} from "@material-ui/core";
import BurgerCardModal from "../../Components/BurgerCardList/BurgerCardModal";
import {addItemToBasket, editBasketItem, makePurchase, resetPurchaseSuccess} from "../../store/actions/basketActions";
import {initIngredients} from "../../store/actions/burgerEditorActions";
import OrderForm from "../../Components/Checkout/OrderForm";
import HeadingDivider from "../../Components/UI/HeadingDivider";
import {Link} from "react-router-dom";

const styles = (theme) => ({
    orders: {
        margin: "20px 5px"
    },
    form: {

    },
    successMessage: {
        color: theme.additionalColors.success
    }
});

const Checkout = ({
                      classes,
                      basket,
                      totalPrice,
                      burgerEditorState,
                      initIngredients,
                      editBasketItem,
                      isSuccess,
                      isPurchasing,
                      isErrorPurchasing,
                      resetSuccessStatus,
                      makePurchase
                  }) => {
    useEffect(()=>{
        resetSuccessStatus();
    },[]);
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
            <Helmet title="Checkout" />
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
                <HeadingDivider/>
                <Typography variant="h3" component="h3" color="primary" align="center">
                    {totalPrice} UAH
                </Typography>
                <Typography variant="subheading" component="p" color="primary" align="center">
                    Total amount to pay
                </Typography>
            </section>
            <section className={classes.form}>
                { basket.length || isErrorPurchasing
                    ? <OrderForm
                    {...{makePurchase}}
                    isErrorPosting={isErrorPurchasing}
                    isPosting={isPurchasing}
                    />
                    : null}
                {isSuccess &&
                <Typography variant="h4" className={classes.successMessage} align="center">
                    Your order is taken care of!
                </Typography>}
            </section>
        </div>
    );
};

const mapStateToProps = (state) => ({
    basket: state.basket.basket,
    burgerEditorState: state.burgerEditor,
    totalPrice: state.basket.totalPrice,
    isSuccess: state.basket.success,
    isPurchasing: state.basket.loading,
    isErrorPurchasing: state.basket.error
});
const mapDispatchToProps = (dispatch) => ({
    addItemToBasket: (item) => dispatch(addItemToBasket(item)),
    initIngredients: (ingredients, additives, initCost) => dispatch(initIngredients(ingredients, additives, initCost)),
    editBasketItem: (index, newItem) => dispatch(editBasketItem(index, newItem)),
    resetSuccessStatus: () => dispatch(resetPurchaseSuccess()),
    makePurchase: (orderData, isAnonymous) => dispatch(makePurchase(orderData, isAnonymous))
});

export default connect(mapStateToProps, mapDispatchToProps)( withStyles(styles)(Checkout) );