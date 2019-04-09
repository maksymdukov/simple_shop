import React from 'react';
import {Button, withStyles} from "@material-ui/core";

const styles = theme => ({
    removeFromBasket: {
        backgroundColor: "red",
        color: "white"
    }
});

const RemoveFromBasket = ({classes, onClick, children}) => {
    return (
        <Button className={classes.removeFromBasket} {...{onClick}}>
            {children}
        </Button>
    );
};

export default withStyles(styles)(RemoveFromBasket);