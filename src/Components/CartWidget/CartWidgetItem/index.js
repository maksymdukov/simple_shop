import React from 'react';
import {minusQuantity, plusQuantity} from "../../../store/actions/basketActions";
import {IconButton, List, ListItem, ListItemText, Typography, withStyles} from "@material-ui/core";
import IconMinus from '@material-ui/icons/Remove'
import IconPlus from '@material-ui/icons/Add';
import IconRemove from '@material-ui/icons/RemoveCircle'

const styles = theme => ({
    root: {
        display: "flex"
    }
});

const CartWidgetItem = ({classes, name, quantity, idx, plusQuantity, minusQuantity, removeItem}) => {
    return (
        <ListItem className={classes.root} component="li">
            <Typography variant="h6">
                {name}
            </Typography>
            <div>
                <IconButton onClick={()=>minusQuantity(idx)}>
                    <IconMinus/>
                </IconButton>
                {quantity}
                <IconButton onClick={()=>plusQuantity(idx)}>
                    <IconPlus/>
                </IconButton>
            </div>
            <IconButton onClick={()=>removeItem(idx)}>
                <IconRemove/>
            </IconButton>
        </ListItem>
    );
};

export default withStyles(styles)(CartWidgetItem);