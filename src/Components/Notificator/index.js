import React from 'react';
import {Button, Snackbar} from "@material-ui/core";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {mapStateToProps, mapDispatchToProps} from "./redux";

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
            message={
                <div id="message-id">"{itemName}" added to the basket
                    <Button component={ (props)=> <Link {...props} to="/checkout"/> }
                            variant="text"
                            color="primary"
                    >
                        Checkout
                    </Button>
                </div>
            }
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Notificator);