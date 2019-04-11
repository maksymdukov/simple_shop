import React from 'react';
import BurgerIngredient from "./BurgerIngredient";
import classes from './index.module.css';

const Burger = ({ingredients, removeIngredient}) => {
    let transformedIngredients = ingredients.map((ing,idx) => (
        <BurgerIngredient type={ing} key={ing + String(idx)} removeIngredient={ () => removeIngredient(idx) } />
    ));
    if (!ingredients.length) {
        transformedIngredients = <p>Start adding ingredients.</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};


export default Burger;