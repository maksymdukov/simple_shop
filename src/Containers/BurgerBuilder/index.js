import React from 'react';
import {Helmet} from "react-helmet/es/Helmet";
import BurgerEditor from "../../Components/BurgerEditor";
import {connect} from "react-redux";
import {Divider, Fab, Paper, withStyles} from "@material-ui/core";
import IconAddToBasket from '@material-ui/icons/AddShoppingCartOutlined';
import styles from './styles';
import {mapStateToProps, mapDispatchToProps} from "./redux";
import {basename} from "../../index";

const BurgerBuilder = ({
                           classes,
                           ingredients,
                           addToBasket,
                           burgerCost,
                           additives,
                           menu,
                           initIngredients,
                           showNotification
                       }) => {
    const initialCost = menu ? menu.prices.initial : 0;
    const item = {
        name: 'Custom Burger',
        ingredients: ingredients,
        additives: additives,
        price: burgerCost,
        image: `${basename}/static/media/burger-logo.png`,
        id: Date.now()
    };
    const handleAddToBasket = () => {
        addToBasket(item);
        initIngredients([], {}, initialCost);
        showNotification(item.name);
    };
    return (
        <div className={classes.container}>
            <Helmet title="Burger Builder"/>
            <BurgerEditor/>
            <div className={classes.fixedControls}>
                <Paper className={classes.paper}>
                    <div className={classes.cartIcon}>
                        <Fab className={classes.fab} disabled={!ingredients.length} onClick={handleAddToBasket}>
                            <IconAddToBasket/>
                        </Fab>
                    </div>
                    <Divider variant="fullWidth"/>
                    <p className={classes.priceTag}>Current cost: <span>{burgerCost} UAH</span></p>
                </Paper>
            </div>
        </div>
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(BurgerBuilder)
);