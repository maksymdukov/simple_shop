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
        backgroundColor: theme.palette.common.brightBrown,
        marginBottom: theme.spacing.unit * 2,
        transition: "box-shadow .1s linear, background-color .2s linear",
        '&:hover': {
            boxShadow: `0px 3px 3px -1px ${theme.palette.primary.main}, 0px 3px 3px 0px ${theme.palette.primary.main}, 0px 1px 5px 0px ${theme.palette.primary.main}`,
        }
    },
    details: {
        display: 'block'
    },
    price: {
        color: theme.palette.primary.main
    },
    orderTaken: {
        backgroundColor: theme.additionalColors.successLight
    }
});

const OrderCard = ({classes, order, cardSummary, cardDetails}) => {
    const cardClasses = [classes.card];
    if (order.taken) {
        cardClasses.push(classes.orderTaken)
    }
    return (
        <ExpansionPanel className={cardClasses.join(" ")}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                { cardSummary() }
            </ExpansionPanelSummary>
            <ExpansionPanelDetails classes={{root: classes.details}}>
                <HeadingDivider/>
                { cardDetails() }
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default withStyles(styles)(OrderCard);