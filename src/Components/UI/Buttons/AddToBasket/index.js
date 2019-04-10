import React from 'react';
import {Button, withStyles} from "@material-ui/core";

const styles = theme => ({
    addToBasket: {
        // backgroundColor: "green",
        // color: "white"
        borderRadius: 0,
        '&:hover': {
            opacity: 0.9
        }
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