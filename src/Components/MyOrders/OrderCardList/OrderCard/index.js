import React from "react";
import PropTypes from "prop-types";

// MUI
import {
    withStyles,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails
} from "@material-ui/core";

// Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Local components
import HeadingDivider from "../../../UI/HeadingDivider";

// Styles
import styles from "./styles";

const OrderCard = ({ classes, order, cardSummary, cardDetails }) => {
    const cardClasses = [classes.card];
    if (order.taken) {
        cardClasses.push(classes.orderTaken);
    }
    return (
        <ExpansionPanel className={cardClasses.join(" ")}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                {cardSummary()}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails classes={{ root: classes.details }}>
                <HeadingDivider />
                {cardDetails()}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

OrderCard.propTypes = {
    classes: PropTypes.object.isRequired,
    order: PropTypes.object.isRequired,
    cardSummary: PropTypes.func.isRequired,
    cardDetails: PropTypes.func.isRequired
};

export default withStyles(styles)(OrderCard);
