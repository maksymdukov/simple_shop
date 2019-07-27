import React from "react";
import { Helmet } from "react-helmet/es/Helmet";
import PropTypes from "prop-types";

// Constant
import { basename } from "../../index";

// Components
import BurgerEditor from "../../Components/BurgerEditor";

// Redux
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./redux";

// MUI
import { Divider, Fab, Paper, withStyles } from "@material-ui/core";
import IconAddToBasket from "@material-ui/icons/AddShoppingCartOutlined";
import styles from "./styles";

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
        name: "Custom Burger",
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
            <Helmet title="Burger Builder" />
            <BurgerEditor />
            <div className={classes.fixedControls}>
                <Paper className={classes.paper}>
                    <div className={classes.cartIcon}>
                        <Fab
                            className={classes.fab}
                            disabled={!ingredients.length}
                            onClick={handleAddToBasket}
                        >
                            <IconAddToBasket />
                        </Fab>
                    </div>
                    <Divider variant="fullWidth" />
                    <div className={classes.priceTagWrapper}>
                        <p>Current cost:</p>
                        <p className={classes.priceTag}>{burgerCost} UAH</p>
                    </div>
                </Paper>
            </div>
        </div>
    );
};

BurgerBuilder.propTypes = {
    classes: PropTypes.object.isRequired,
    ingredients: PropTypes.array.isRequired,
    addToBasket: PropTypes.func.isRequired,
    burgerCost: PropTypes.number,
    additives: PropTypes.object.isRequired,
    menu: PropTypes.object,
    initIngredients: PropTypes.func.isRequired,
    showNotification: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(BurgerBuilder));
