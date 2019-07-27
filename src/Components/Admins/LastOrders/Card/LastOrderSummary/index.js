import React from "react";
import PropTypes from "prop-types";

// MUI
import {
    Checkbox,
    FormControlLabel,
    Grid,
    Typography,
    withStyles
} from "@material-ui/core";
import styles from "./styles";

// Firebase
import firebase from "../../../../../firebase/config";

const LastOrderSummary = ({ classes, order, orderId }) => {
    const updateOrderStatus = () => {
        firebase
            .database()
            .ref(`/orders/${orderId}`)
            .update({ taken: !order.taken });
    };
    const handleIsDoneClick = e => {
        updateOrderStatus();
    };
    const date = new Date(order.timestamp);
    return (
        <Grid container className={classes.container}>
            <Grid item xs={3}>
                {date.toLocaleString()}
            </Grid>
            <Grid item xs={6}>
                <Grid container direction="column">
                    <div>
                        Email: <b>{order.email}</b>
                    </div>
                    <div>
                        Name: <b>{order.name}</b>
                    </div>
                    <div>
                        Phone: <b>{order.phone}</b>
                    </div>
                    <div>
                        Address: <b>{order.address}</b>
                    </div>
                    <div>
                        Registered: <b>{order.uid ? "Yes" : "No"}</b>
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={1}>
                <Grid container alignItems={"flex-end"} direction="column">
                    <div>
                        {order.totalQuantity}{" "}
                        {order.totalQuantity > 1 ? "items" : "item"}
                    </div>
                    <Typography variant="subtitle1" className={classes.price}>
                        {order.totalPrice} UAH
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={2} className={classes.isChecked}>
                <FormControlLabel
                    onClick={e => e.stopPropagation()}
                    control={
                        <Checkbox
                            checked={!!order.taken}
                            onChange={handleIsDoneClick}
                            value={String(!!order.taken)}
                        />
                    }
                    label="Checked"
                />
            </Grid>
        </Grid>
    );
};

LastOrderSummary.propTypes = {
    classes: PropTypes.object.isRequired,
    order: PropTypes.object.isRequired,
    orderId: PropTypes.string.isRequired
};

export default withStyles(styles)(LastOrderSummary);
