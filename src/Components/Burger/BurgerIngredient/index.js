import React, {Fragment} from 'react';
import classes from './index.module.css';
import {IconButton} from "@material-ui/core";
import IconRemove from "@material-ui/icons/RemoveCircleOutline"

const BurgerIngredient = ({type, removeIngredient}) => {
    let ingredientClass = null,
        ingredient = null,
        bread = null;
    switch (type) {
        case 'bread-bottom':
            bread = <div className={classes.BreadBottom}></div>;
            break;
        case 'bread-top':
            bread = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case 'meat':
            ingredientClass = classes.Meat;
            break;
        case 'cheese':
            ingredientClass = classes.Cheese;
            break;
        case 'salad':
            ingredientClass = classes.Salad;
            break;
        case 'bacon':
            ingredientClass = classes.Bacon;
            break;
        case 'chicken':
            ingredientClass = classes.Chicken;
            break;
        case 'tomato':
            ingredientClass = classes.Tomato;
            break;
        case 'cucumber':
            ingredientClass = classes.Cucumber;
            break;
        case 'onion':
            ingredientClass = classes.Onion;
            break;
        default:
            ingredientClass = null;
    }
    if (ingredientClass) {
        ingredient = (
            <div className={ingredientClass}>
                <div className={classes.IngredientName}>
                    <div>{type}</div>
                </div>
                <div className={classes.RemoveButton}>
                    <IconButton onClick={removeIngredient}>
                        <IconRemove fontSize="small"/>
                    </IconButton>
                </div>
            </div>
        );
    }
    return (
        <Fragment>
            {bread}
            {ingredient}
        </Fragment>
    );
};

export default BurgerIngredient;