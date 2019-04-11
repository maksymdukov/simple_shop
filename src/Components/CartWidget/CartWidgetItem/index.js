import React from 'react';
import {minusQuantity, plusQuantity} from "../../../store/actions/basketActions";
import {IconButton, List, ListItem, ListItemText, Typography, withStyles, Grid} from "@material-ui/core";
import IconMinus from '@material-ui/icons/Remove'
import IconPlus from '@material-ui/icons/Add';
import IconRemove from '@material-ui/icons/Clear'

const styles = theme => ({
    root: {
        display: "flex",
        borderBottom: `1px solid ${theme.palette.divider}`,
        '&:last-child': {
            borderBottom: "none"
        }
    },
    quantity: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
    itemPrice: {
        color: "#d2a006"
    }
});

const CartWidgetItem = ({classes, name, quantity, idx, plusQuantity, minusQuantity, removeItem, price}) => {
    return (
        <ListItem className={classes.root} component="li">
            <Grid container alignItems="center">
                <Grid item xs={5}>
                    <Typography variant="h6" align="left">
                        {name}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.quantity}>
                        <IconButton onClick={()=>minusQuantity(idx)}>
                            <IconMinus/>
                        </IconButton>
                        {quantity}
                        <IconButton onClick={()=>plusQuantity(idx)}>
                            <IconPlus/>
                        </IconButton>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle2" align="left"  className={classes.itemPrice}>
                        {price} UAH
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={()=>removeItem(idx)}>
                        <IconRemove color="error" fontSize="small"/>
                    </IconButton>
                </Grid>
            </Grid>
        </ListItem>
    );
};

export default withStyles(styles)(CartWidgetItem);