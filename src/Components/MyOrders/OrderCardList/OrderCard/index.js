import React from 'react';
import {
    withStyles,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HeadingDivider from "../../../UI/HeadingDivider";
import styles from './styles'

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