import React from 'react';
import {Grid, Typography, withStyles} from "@material-ui/core";

const styles = (theme) => ({
    price: {
        color: theme.palette.primary.main
    }
});

const OrderCardSummary = ({classes, order}) => {
    const date = new Date(order.timestamp);
    return (
        <Grid container>
            <Grid item xs={6}>
                {date.toLocaleString()}
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"flex-end"} direction="column" >
                    <div>{order.totalQuantity} {order.totalQuantity > 1 ? "items" : "item"}</div>
                    <Typography variant="subtitle1" className={classes.price}>{order.totalPrice} UAH</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(OrderCardSummary);