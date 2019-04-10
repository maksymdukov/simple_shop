import React from 'react';
import {Button, withStyles} from "@material-ui/core";

const styles = theme => ({
    addToBasket: {
        backgroundColor: "green",
        color: "white"
    }
});

const AddToBasket = ({classes, children, className, ...others }) => {
    let classesArr = [classes.addToBasket];
    if (className) {
        classesArr.push(className)
    }
    return (
        <Button className={classesArr.join(" ")} {...others}>
            {children}
        </Button>
    );
};

export default withStyles(styles)(AddToBasket);