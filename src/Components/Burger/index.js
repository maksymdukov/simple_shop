import React from 'react';
import BurgerIngredient from "./BurgerIngredient";
import classes from './index.module.css';

const Burger = ({ingredients, removeIngredient = ()=>{}, notEditable, isInModal}) => {
    let transformedIngredients = ingredients.map((ing,idx) => (
        <BurgerIngredient
            type={ing}
            key={ing + String(idx)}
            removeIngredient={ () => removeIngredient(idx) }
            {...{notEditable}}
        />
    ));
    if (!ingredients.length) {
        transformedIngredients = <p>Start adding ingredients.</p>
    }

    const burgerClass = notEditable ? classes.BurgerView : classes.Burger;

    return (
        <div className={burgerClass}>
                <BurgerIngredient type='bread-top'/>
                {transformedIngredients}
                <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};


export default Burger;