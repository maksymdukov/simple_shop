import React from 'react';
import {Button, withStyles} from "@material-ui/core";

const styles = theme => ({
    addToBasket: {
        backgroundColor: "green",
        color: "white"
    }
});

const AddToBasket = ({classes, onClick, children}) => {
    return (
        <Button className={classes.addToBasket} {...{onClick}}>
            {children}
        </Button>
    );
};

export default withStyles(styles)(AddToBasket);