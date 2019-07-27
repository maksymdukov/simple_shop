import React, { useEffect } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./redux";

// MUI
import { withStyles } from "@material-ui/core";
import styles from "./styles";

// Local components
import Pagination from "../../Components/UI/Pagination";
import Orders from "../../Components/MyOrders/OrderCardList";
import Spinner from "../../Components/UI/Spinner";
import withErrorModal from "../../hoc/withErrorModal";

// Components
import { Helmet } from "react-helmet/es/Helmet";

const MyOrders = ({
    classes,
    fetchList,
    ordersList,
    fetchContent,
    ordersContent,
    listLoading,
    contentLoading
}) => {
    useEffect(() => {
        fetchList();
    }, []);
    return (
        <div>
            <Helmet title="My orders" />
            <section className={classes.orders}>
                {listLoading ? (
                    <Spinner />
                ) : ordersList.length ? (
                    <Pagination
                        ordersList={ordersList}
                        render={(start, end) => (
                            <Orders
                                {...{
                                    start,
                                    end,
                                    contentLoading,
                                    fetchContent,
                                    ordersContent
                                }}
                            />
                        )}
                    />
                ) : (
                    <p style={{ textAlign: "center" }}>
                        You've got no orders so far.
                    </p>
                )}
            </section>
        </div>
    );
};

MyOrders.propTypes = {
    classes: PropTypes.object.isRequired,
    fetchList: PropTypes.func.isRequired,
    ordersList: PropTypes.array.isRequired,
    fetchContent: PropTypes.func.isRequired,
    ordersContent: PropTypes.array.isRequired,
    listLoading: PropTypes.bool.isRequired,
    contentLoading: PropTypes.bool.isRequired
};

const EnhancedComponent = withErrorModal(MyOrders);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(EnhancedComponent));
