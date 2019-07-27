import React from "react";
import PropTypes from "prop-types";

// MUI
import { Button, withStyles } from "@material-ui/core";

// Styles
import styles from "./styles";

const AddToBasket = ({ classes, children, className, ...others }) => {
    let classesArr = [classes.addToBasket];
    if (className) {
        classesArr.push(className);
    }
    return (
        <Button className={classesArr.join(" ")} {...others}>
            {children}
        </Button>
    );
};

AddToBasket.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any,
    className: PropTypes.string
};

export default withStyles(styles)(AddToBasket);
