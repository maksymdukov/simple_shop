import React from "react";
import PropTypes from "prop-types";

// MUI
import { Button, Snackbar } from "@material-ui/core";

// Redux
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./redux";

// Router
import { Link } from "react-router-dom";

const Notificator = ({
    isOpened,
    hideNotification,
    itemName
}) => {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
            }}
            open={isOpened}
            autoHideDuration={3000}
            onClose={hideNotification}
            ContentProps={{
                "aria-describedby": "message-id"
            }}
            message={
                <div id="message-id">
                    "{itemName}" added to the basket
                    <Button
                        component={props => <Link {...props} to="/checkout" />}
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

Notificator.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    hideNotification: PropTypes.func.isRequired,
    itemName: PropTypes.string

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notificator);
