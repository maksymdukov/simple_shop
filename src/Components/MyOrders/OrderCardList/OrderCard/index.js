import React from 'react';
import {
    withStyles,
    ExpansionPanel,
    ExpansionPanelSummary,
    Grid,
    ExpansionPanelDetails,
    Typography, Divider
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ItemCard from "./ItemCard";
import HeadingDivider from "../../../UI/HeadingDivider";


const styles = (theme) => ({
    card: {
        marginBottom: theme.spacing.unit * 2,
        transition: "box-shadow .1s linear",
        '&:hover': {
            boxShadow: `0px 3px 3px -1px ${theme.palette.primary.main}, 0px 3px 3px 0px ${theme.palette.primary.main}, 0px 1px 5px 0px ${theme.palette.primary.main}`,
        }
    },
    details: {
        display: 'block'
    },
    price: {
        color: theme.palette.primary.main
    }
});

const OrderCard = ({classes, order}) => {
    const date = new Date(order.timestamp);
    return (
        <ExpansionPanel className={classes.card}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
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
            </ExpansionPanelSummary>
            <ExpansionPanelDetails classes={{root: classes.details}}>
                <HeadingDivider/>
                <Grid container>
                    {order.basket.map(basketItem => <ItemCard
                        key={basketItem.id || basketItem.name}
                        {...{basketItem}}
                    />)
                    }
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default withStyles(styles)(OrderCard);