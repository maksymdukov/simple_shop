import React from 'react';
import {Helmet} from "react-helmet/es/Helmet";
import BurgerEditor from "../../Components/BurgerEditor";
import {addIngredient, initIngredients, removeIngredient} from "../../store/actions/burgerEditorActions";
import {addItemToBasket} from "../../store/actions/basketActions";
import {connect} from "react-redux";
import AddToBasket from "../../Components/UI/Buttons/AddToBasket";
import {showNotification} from "../../store/actions/notificatorActions";
import {Badge, Divider, Fab, Paper, withStyles} from "@material-ui/core";
import IconAddToBasket from '@material-ui/icons/AddShoppingCartOutlined';

const styles = (theme) => ({
    container: {
        padding: "20px 5px 120px 5px"
    },
    fixedControls: {
        position: "fixed",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        left: "50%",
        transform: "translateX(-50%)"
    },
    cartIcon: {
        textAlign: "center",
        marginBottom: 2
    },
    fab: {
        backgroundColor: theme.card.price.mainColor,
        color: theme.card.frontSide.backgroundColor
    },
    paper: {
        width: "auto",
        padding: "10px 40px",
        backgroundColor: theme.card.frontSide.backgroundColor,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    priceTag: {
        padding: 5,
        margin: 0,
        '& span': {
            color: theme.card.price.mainColor,
        }
    }
});

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
        id: Date.now()
    };
    const handleAddToBasket = () => {
        addToBasket(item);
        initIngredients([],{}, initialCost);
        showNotification(item.name);
    };
    return (
        <div className={classes.container}>
            <Helmet title="Burger Builder"/>
            <BurgerEditor />
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

const mapStateToProps = (state) => ({
    ingredients: state.burgerEditor.ingredients,
    additives: state.burgerEditor.additives,
    burgerCost: state.burgerEditor.burgerCost,
    menu: state.burgerEditor.menu
});

const mapDispatchToProps = (dispatch) => ({
    addToBasket: (item) => dispatch(addItemToBasket(item)),
    initIngredients: (ingredients, additives, initCost) => dispatch(initIngredients(ingredients, additives, initCost)),
    showNotification: (itemName) => dispatch(showNotification(itemName))
});

export default withStyles(styles)( connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder) ) ;