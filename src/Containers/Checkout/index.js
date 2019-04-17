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
import {Redirect} from "react-router";

const styles = (theme) => ({
    orders: {
        margin: "20px 5px"
    },
    form: {},
    successMessage: {
        color: theme.additionalColors.success,
        margin: `${theme.spacing.unit * 5}px`
    },
    redirect: {
        color: theme.additionalColors.dangerColor,
        margin: `${theme.spacing.unit * 2}px`
    },
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
                      makePurchase,
                      profile
                  }) => {
    const [isRedirected, setIsRedirected] = useState(false);
    const [countDown, setCountDown] = useState(3);
    //Reset possible successfully shipped order.
    useEffect(() => {
        return () => {
            resetSuccessStatus();
        }
    }, []);
    //Redirect
    useEffect(()=> {
        let timer, interval;
        if (isSuccess) {
            timer = setTimeout(()=>{
                setIsRedirected(true);
                console.log('Redirect shown');
            },3000);
            interval = setInterval(()=>{
                setCountDown((state) => state - 1);
            },1000)
        }
        return () => {
            clearInterval(interval);
            if (timer) {
                clearTimeout(timer);
            }
        }
    },[isSuccess]);
    //BurgerEditor modal
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
            <Helmet title="Checkout"/>
            {isRedirected && <Redirect to="/menu"/>}
            {!isSuccess
                ? <section className={classes.orders}>
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
                    <Typography variant="subtitle1" component="p" color="primary" align="center">
                        Total amount to pay
                    </Typography>
                </section>
                :   <Fragment>
                        <Typography variant="h4" className={classes.successMessage} align="center">
                            Your order has been shipped!
                        </Typography>
                        <Typography variant='body1' className={classes.redirect} align="center">
                            Redirect in {countDown} seconds
                        </Typography>
                    </Fragment>
            }
            <section className={classes.form}>
                {basket.length || isErrorPurchasing
                    ? <OrderForm
                        {...{makePurchase, profile}}
                        isErrorPosting={isErrorPurchasing}
                        isPosting={isPurchasing}
                    />
                    : null}
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
    isErrorPurchasing: state.basket.error,
    profile: state.profile.profile
});
const mapDispatchToProps = (dispatch) => ({
    addItemToBasket: (item) => dispatch(addItemToBasket(item)),
    initIngredients: (ingredients, additives, initCost) => dispatch(initIngredients(ingredients, additives, initCost)),
    editBasketItem: (index, newItem) => dispatch(editBasketItem(index, newItem)),
    resetSuccessStatus: () => dispatch(resetPurchaseSuccess()),
    makePurchase: (contactData) => dispatch(makePurchase(contactData))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Checkout));