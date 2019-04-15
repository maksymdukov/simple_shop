import React, {useEffect} from 'react';
import {Helmet} from "react-helmet/es/Helmet";
import {fetchOrderList, fetchContent} from "../../store/actions/userOrdersActions";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core";
import Pagination from "../../Components/UI/Pagination";
import Orders from "../../Components/MyOrders/OrderCardList";
import Spinner from "../../Components/UI/Spinner";

const styles = (theme) => ({
    orders: {
        margin: "auto",
        [theme.breakpoints.up('xs')]: {
            width: "100%"
        },
        [theme.breakpoints.up('md')]: {
            width: "80%"
        },
        [theme.breakpoints.up('lg')]: {
            width: "70%"
        }
    }
});

const MyOrders = ({
                        classes,
                      fetchList,
                      ordersList,
                      fetchContent,
                      ordersContent,
                      listLoading,
                      contentLoading,
                      listError,
                      contentError
}) => {
    useEffect(()=>{
        fetchList();
    },[]);
    return (
        <div>
            <Helmet title="My orders"/>
            <section className={classes.orders}>
                {listLoading
                    ? <Spinner/>
                    : ordersList.length
                        ?  <Pagination
                            ordersList={ordersList}
                            render={(start, end)=><Orders {...{
                                start,
                                end,
                                contentLoading,
                                fetchContent,
                                ordersContent}}
                            />}
                        />
                        :   <p style={{textAlign: "center"}}>You've got no orders so far.</p>
                }
            </section>
        </div>
    );
};

const mapStateToProps = (state) => ({
    ordersList: state.userOrders.ordersList,
    ordersContent: state.userOrders.ordersContent,
    listLoading: state.userOrders.listLoading,
    contentLoading: state.userOrders.contentLoading,
    listError: state.userOrders.listError,
    contentError: state.userOrders.contentError
});

const mapDispatchToProps = (dispatch) => ({
    fetchList: () => dispatch(fetchOrderList()),
    fetchContent: (start, end) => dispatch(fetchContent(start, end))
});

export default withStyles(styles)( connect(mapStateToProps, mapDispatchToProps)(MyOrders) ) ;