import React from 'react';
import {Grid} from "@material-ui/core";
import ItemCard from "../ItemCard";

const OrderCardDetails = ({classes, order}) => {
    return (
        <Grid container>
            {order.basket.map(basketItem => <ItemCard
                key={basketItem.id || basketItem.name}
                {...{basketItem}}
            />)}
        </Grid>
    );
};

export default OrderCardDetails;