import React from 'react';
import {Button, withStyles} from "@material-ui/core";

const styles = theme => ({
    removeFromBasket: {
        color: "inherit",
        borderRadius: 0,
        '&:hover': {
            opacity: 0.9
        }
    }
});

const RemoveFromBasket = ({classes, children, className, ...others}) => {
    let classesArr = [classes.removeFromBasket];
    if (className) {
        classesArr.push(className)
    }
    return (
        <Button className={classesArr.join(" ")} {...others}>
            {children}
        </Button>
    );
};

export default withStyles(styles)(RemoveFromBasket);