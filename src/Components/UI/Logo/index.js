import React from "react";

// Styles
import classes from "./index.module.css";

// Assets
import burgerLogo from "../../../assets/burger-logo.png";

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="Logo" />
        </div>
    );
};

export default Logo;
