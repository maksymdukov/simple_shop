import React from "react";
import PropTypes from "prop-types";

// Local components
import AdditiveControl from "./AdditiveControl";

// Style
import classes from "./index.module.css";

const AdditiveControls = ({
    additivesMenu,
    additives,
    addAdditive,
    removeAdditive,
    ingPrices
}) => {
    let additivesControls;
    additivesControls = additivesMenu.map(additiveMenu => (
        <AdditiveControl
            key={additiveMenu}
            {...{ additiveMenu, additives, addAdditive, removeAdditive }}
            price={ingPrices[additiveMenu]}
        />
    ));
    return <ul className={classes.AdditiveControls}>{additivesControls}</ul>;
};

AdditiveControl.propTypes = {
    additivesMenu: PropTypes.array,
    additives: PropTypes.object.isRequired,
    addAdditive: PropTypes.func.isRequired,
    removeAdditive: PropTypes.func.isRequired,
    ingPrices: PropTypes.object
};

export default AdditiveControls;
