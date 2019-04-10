import React from 'react';
import {Snackbar} from "@material-ui/core";
import {connect} from "react-redux";
import {showNotification, hideNotification} from "../../store/actions/notificatorActions";

const Notificator = ({isOpened, showNotification, hideNotification, itemName}) => {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={isOpened}
            autoHideDuration={3000}
            onClose={hideNotification}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">"{itemName}" added to the basket</span>}
        />
    );
};

const mapStateToProps = (state) => ({
    isOpened: state.notificator.isOpened,
    itemName: state.notificator.itemName
});

const mapDispatchToProps = (dispatch) => ({
    showNotification: () => dispatch(showNotification()),
    hideNotification: () => dispatch(hideNotification()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notificator);