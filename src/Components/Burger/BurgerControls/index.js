import React from "react";
import PropTypes from "prop-types";

// Local components
import BuildControlItem from "./BuildControlItem";

// Styles
import classes from "./index.module.css";

const BuildControls = ({ addIngredient, ingredientsMenu, ingPrices }) => {
    return (
        <ul className={classes.BuildControls}>
            {ingredientsMenu.map(control => (
                <BuildControlItem
                    key={control}
                    name={control}
                    price={ingPrices[control]}
                    handlePlusIng={() => addIngredient(control)}
                />
            ))}
        </ul>
    );
};

BuildControls.propTypes = {
    addIngredient: PropTypes.func.isRequired,
    ingredientsMenu: PropTypes.array.isRequired,
    ingPrices: PropTypes.object.isRequired
};

export default BuildControls;
