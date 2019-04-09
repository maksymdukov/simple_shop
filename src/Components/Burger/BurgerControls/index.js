import React from 'react';
import BuildControlItem from "./BuildControlItem";
import classes from './index.module.css';

const BuildControls = ({addIngredient, ingredientsMenu}) => {
    return (
        <ul className={classes.BuildControls}>
            {ingredientsMenu.map(control => (
                <BuildControlItem
                    key={control}
                    name={control}
                    handlePlusIng={ () => addIngredient(control) }/>
            ))}
        </ul>
    );
};

export default BuildControls;