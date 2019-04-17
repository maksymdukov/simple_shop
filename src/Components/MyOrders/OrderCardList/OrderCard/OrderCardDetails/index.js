import React from 'react';
import {Grid, Typography, withStyles} from "@material-ui/core";
import ItemCard from "../ItemCard";

const styles = (theme) => ({
});

const OrderCardDetails = ({classes, order}) => {
    return (
        <Grid container>
            {order.basket.map(basketItem => <ItemCard
                key={basketItem.id || basketItem.name}
                {...{basketItem}}
            />)
            }
        </Grid>
    );
};

export default withStyles(styles)(OrderCardDetails);