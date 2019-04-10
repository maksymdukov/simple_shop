import React from 'react';
import {Snackbar} from "@material-ui/core";
import {HIDE_MESSAGE, SHOW_MESSAGE} from "../../store/actionTypes";
import {connect} from "react-redux";

const Notificator = ({isOpened, showMessage, hideMessage, itemName}) => {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={isOpened}
            autoHideDuration={3000}
            onClose={hideMessage}
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
    showMessage: () => dispatch({type: SHOW_MESSAGE}),
    hideMessage: () => dispatch({type: HIDE_MESSAGE}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notificator);