import React from "react";
import PropTypes from "prop-types";

// MUI
import { IconButton } from "@material-ui/core";

// Icons
import IconPlus from "@material-ui/icons/Add";
import IconMinus from "@material-ui/icons/Remove";

// Styles
import classes from "./index.module.css";

const AdditiveControl = ({
    additiveMenu,
    additives,
    addAdditive,
    removeAdditive,
    price
}) => {
    let jarClasses = [classes.AdditiveControl];
    if (!additives[additiveMenu]) {
        jarClasses.push(classes.blurred);
    }
    return (
        <li className={jarClasses.join(" ")}>
            <div>{additiveMenu}</div>
            <div className={classes.Price}>{price} UAH</div>
            <IconButton
                disabled={!additives[additiveMenu]}
                onClick={() => removeAdditive(additiveMenu)}
            >
                <IconMinus />
            </IconButton>
            {additives[additiveMenu] ? additives[additiveMenu] : 0}
            <IconButton onClick={() => addAdditive(additiveMenu)}>
                <IconPlus />
            </IconButton>
        </li>
    );
};

AdditiveControl.propTypes = {
    additiveMenu: PropTypes.string,
    additives: PropTypes.object.isRequired,
    addAdditive: PropTypes.func.isRequired,
    removeAdditive: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired
};

export default AdditiveControl;
