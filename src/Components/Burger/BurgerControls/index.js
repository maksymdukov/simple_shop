import React from 'react';
import BuildControlItem from "./BuildControlItem";
import classes from './index.module.css';

const BuildControls = ({addIngredient, ingredientsMenu, ingPrices}) => {
    return (
        <ul className={classes.BuildControls}>
            {ingredientsMenu.map(control => (
                <BuildControlItem
                    key={control}
                    name={control}
                    price={ingPrices[control]}
                    handlePlusIng={ () => addIngredient(control) }/>
            ))}
        </ul>
    );
};

export default BuildControls;