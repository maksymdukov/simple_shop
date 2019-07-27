import React from "react";
import PropTypes from "prop-types";

// MUI
import { IconButton } from "@material-ui/core";

// Icons
import IconPlus from "@material-ui/icons/Add";

// Styles
import classes from "./index.module.css";

const BuildControlItem = ({ name, handlePlusIng, price }) => {
    let ingClass = [classes.BuildControlItem];
    switch (name) {
        case "meat":
            ingClass.push(classes.Meat);
            break;
        case "bacon":
            ingClass.push(classes.Bacon);
            break;
        case "cheese":
            ingClass.push(classes.Cheese);
            break;
        case "salad":
            ingClass.push(classes.Salad);
            break;
        case "chicken":
            ingClass.push(classes.Chicken);
            break;
        case "tomato":
            ingClass.push(classes.Tomato);
            break;
        case "cucumber":
            ingClass.push(classes.Cucumber);
            break;
        case "onion":
            ingClass.push(classes.Onion);
            break;
        default:
            break;
    }
    return (
        <li className={ingClass.join(" ")}>
            <IconButton onClick={handlePlusIng}>
                <IconPlus />
            </IconButton>
            <div>{name}</div>
            <div className={classes.Price}>{price} UAH</div>
        </li>
    );
};

BuildControlItem.propTypes = {
    name: PropTypes.string.isRequired,
    handlePlusIng: PropTypes.func.isRequired, 
    price: PropTypes.number.isRequired
};

export default BuildControlItem;
