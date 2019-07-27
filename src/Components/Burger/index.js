import React from "react";
import PropTypes from "prop-types";

// Local components
import BurgerIngredient from "./BurgerIngredient";

// Styles
import classes from "./index.module.css";

const Burger = ({ ingredients, removeIngredient, notEditable }) => {
    let transformedIngredients = ingredients.map((ing, idx) => (
        <BurgerIngredient
            type={ing}
            key={ing + String(idx)}
            removeIngredient={() => removeIngredient(idx)}
            {...{ notEditable }}
        />
    ));
    if (!ingredients.length) {
        transformedIngredients = <p>Start adding ingredients.</p>;
    }

    const burgerClass = notEditable ? classes.BurgerView : classes.Burger;

    return (
        <div>
            <div className={burgerClass}>
                <BurgerIngredient type="bread-top" />
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom" />
            </div>
        </div>
    );
};

Burger.defaultProps = {
    removeIngredient: () => {}
};

Burger.propTypes = {
    ingredients: PropTypes.array.isRequired,
    removeIngredient: PropTypes.func.isRequired,
    notEditable: PropTypes.bool,
};

export default Burger;
