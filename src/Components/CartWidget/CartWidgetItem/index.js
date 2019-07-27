import React from "react";
import PropTypes from "prop-types";

// MUI
import {
    IconButton,
    ListItem,
    Typography,
    withStyles,
    Grid
} from "@material-ui/core";

// Icons
import IconMinus from "@material-ui/icons/Remove";
import IconPlus from "@material-ui/icons/Add";
import IconRemove from "@material-ui/icons/Clear";

// Styles
import styles from "./styles";

const CartWidgetItem = ({
    classes,
    name,
    quantity,
    idx,
    plusQuantity,
    minusQuantity,
    removeItem,
    price
}) => {
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
                        <IconButton onClick={() => minusQuantity(idx)}>
                            <IconMinus />
                        </IconButton>
                        {quantity}
                        <IconButton onClick={() => plusQuantity(idx)}>
                            <IconPlus />
                        </IconButton>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <Typography
                        variant="subtitle2"
                        align="left"
                        className={classes.itemPrice}
                    >
                        {price} UAH
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={() => removeItem(idx)}>
                        <IconRemove color="error" fontSize="small" />
                    </IconButton>
                </Grid>
            </Grid>
        </ListItem>
    );
};

CartWidgetItem.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    idx: PropTypes.number.isRequired,
    plusQuantity: PropTypes.func.isRequired,
    minusQuantity: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired
};

export default withStyles(styles)(CartWidgetItem);
