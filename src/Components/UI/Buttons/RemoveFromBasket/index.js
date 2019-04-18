import React from 'react';
import {Button, withStyles} from "@material-ui/core";
import styles from './styles';

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