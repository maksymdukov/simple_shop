import {
    hideNotification,
} from "../../store/actions/notificatorActions";

export const mapStateToProps = state => ({
    isOpened: state.notificator.isOpened,
    itemName: state.notificator.itemName
});

export const mapDispatchToProps = dispatch => ({
    hideNotification: () => dispatch(hideNotification())
});
