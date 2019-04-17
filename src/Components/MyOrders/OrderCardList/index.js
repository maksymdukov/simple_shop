import React, {useEffect} from 'react';
import {ExpansionPanel, TableCell, TableRow, withStyles} from "@material-ui/core";
import Spinner from "../../UI/Spinner";
import OrderCard from "./OrderCard";

const styles = (theme) => ({
    mainCell: {
        width: "100%",
        borderBottom: "none"
    },
});

const Orders = (props) => {
    const {classes, start, end, ordersContent, fetchContent, contentLoading} = props;
    useEffect(()=>{
        console.log("[start fetching content]");
        console.log("start:"+ start);
        console.log("end:"+ end);
        fetchContent(start, end);
    }, [props.end]);

    return contentLoading
        ? <TableRow>
            <TableCell>
                <Spinner/>
            </TableCell>
          </TableRow>
        : ordersContent.map(order => (
        <TableRow key={order.timestamp}>
            <TableCell className={classes.mainCell}>
                <OrderCard order={order}/>
            </TableCell>
        </TableRow>
        ))
    ;
};

export default withStyles(styles)(Orders);