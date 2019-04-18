import {hideNotification, showNotification} from "../../store/actions/notificatorActions";

export const mapStateToProps = (state) => ({
    isOpened: state.notificator.isOpened,
    itemName: state.notificator.itemName
});

export const mapDispatchToProps = (dispatch) => ({
    showNotification: () => dispatch(showNotification()),
    hideNotification: () => dispatch(hideNotification()),
});