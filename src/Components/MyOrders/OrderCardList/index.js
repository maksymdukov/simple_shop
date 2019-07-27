import React, { useEffect } from "react";
import PropTypes from "prop-types";

// MUI
import { TableCell, TableRow, withStyles } from "@material-ui/core";

// Local components
import Spinner from "../../UI/Spinner";
import OrderCard from "./OrderCard";
import OrderCardSummary from "./OrderCard/OrderCardSummary";
import OrderCardDetails from "./OrderCard/OrderCardDetails";

// Styles
import styles from "./styles";

const Orders = props => {
    const {
        classes,
        start,
        end,
        ordersContent,
        fetchContent,
        contentLoading
    } = props;
    useEffect(() => {
        console.log("[start fetching content]");
        console.log("start:" + start);
        console.log("end:" + end);
        fetchContent(start, end);
    }, [props.end, props.start]);

    return contentLoading ? (
        <TableRow>
            <TableCell>
                <Spinner />
            </TableCell>
        </TableRow>
    ) : (
        ordersContent.map(order => (
            <TableRow key={order.timestamp}>
                <TableCell className={classes.mainCell}>
                    <OrderCard
                        cardSummary={() => <OrderCardSummary order={order} />}
                        cardDetails={() => <OrderCardDetails order={order} />}
                        order={order}
                    />
                </TableCell>
            </TableRow>
        ))
    );
};

Orders.propTypes = {
    classes: PropTypes.object.isRequired,
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    ordersContent: PropTypes.array.isRequired,
    fetchContent: PropTypes.func.isRequired,
    contentLoading: PropTypes.bool.isRequired
};

export default withStyles(styles)(Orders);
