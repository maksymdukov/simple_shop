import React from "react";
import PropTypes from 'prop-types';

// MUI
import { Grid } from "@material-ui/core";

// Local components
import ItemCard from "../ItemCard";

const OrderCardDetails = ({ order }) => {
    return (
        <Grid container>
            {order.basket.map(basketItem => (
                <ItemCard
                    key={basketItem.id || basketItem.name}
                    {...{ basketItem }}
                />
            ))}
        </Grid>
    );
};

OrderCardDetails.propTypes = {
    order: PropTypes.object.isRequired
};

export default OrderCardDetails;
