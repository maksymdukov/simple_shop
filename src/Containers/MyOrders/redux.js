import {
    fetchContent,
    fetchOrderList
} from "../../store/actions/userOrdersActions";

export const mapStateToProps = state => ({
    ordersList: state.userOrders.ordersList,
    ordersContent: state.userOrders.ordersContent,
    listLoading: state.userOrders.listLoading,
    contentLoading: state.userOrders.contentLoading,
    listError: state.userOrders.listError,
    contentError: state.userOrders.contentError,
    error: state.userOrders.listError || state.userOrders.contentError
});

export const mapDispatchToProps = dispatch => ({
    fetchList: () => dispatch(fetchOrderList()),
    fetchContent: (start, end) => dispatch(fetchContent(start, end))
});
