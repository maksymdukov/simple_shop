import React, {useEffect} from 'react';
import {Helmet} from "react-helmet/es/Helmet";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core";
import Pagination from "../../Components/UI/Pagination";
import Orders from "../../Components/MyOrders/OrderCardList";
import Spinner from "../../Components/UI/Spinner";
import withErrorModal from "../../hoc/withErrorModal";
import styles from './styles';
import {mapStateToProps, mapDispatchToProps} from "./redux";

const MyOrders = ({
                      classes,
                      fetchList,
                      ordersList,
                      fetchContent,
                      ordersContent,
                      listLoading,
                      contentLoading,
                  }) => {
    useEffect(() => {
        fetchList();
    }, []);
    return (
        <div>
            <Helmet title="My orders"/>
            <section className={classes.orders}>
                {listLoading
                    ? <Spinner/>
                    : ordersList.length
                        ? <Pagination
                            ordersList={ordersList}
                            render={(start, end) => <Orders {...{
                                start,
                                end,
                                contentLoading,
                                fetchContent,
                                ordersContent
                            }}
                            />}
                        />
                        : <p style={{textAlign: "center"}}>You've got no orders so far.</p>
                }
            </section>
        </div>
    );
};

const EnhancedComponent = withErrorModal(MyOrders);
export default connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(EnhancedComponent)
);