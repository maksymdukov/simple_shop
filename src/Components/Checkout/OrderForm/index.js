import React from "react";
import PropTypes from "prop-types";

// Components
import { Formik } from "formik";
import validationSchema from "./validation";

// Local components
import FormView from "./form";

// MUI
import { Paper, Typography, withStyles } from "@material-ui/core";

// Styles
import styles from "./styles";

const OrderForm = ({
    classes,
    makePurchase,
    isErrorPosting,
    isPosting,
    profile
}) => {
    const initValues = {
        name: profile.name ? profile.name : "",
        email: profile.email ? profile.email : "",
        phone: profile.phone ? profile.phone : "",
        city: profile.city ? profile.city : "Kyiv",
        address: profile.address ? profile.address : ""
    };
    const handleSubmit = (values, actions) => {
        makePurchase(values);
    };
    return (
        <Paper elevation={1} className={classes.paper}>
            {isErrorPosting ? (
                <Typography color="primary" variant="h5" align="center">
                    {isErrorPosting.code || isErrorPosting.message}
                </Typography>
            ) : null}
            <Formik
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                initialValues={initValues}
                isInitialValid={validationSchema.isValidSync(initValues)}
                enableReinitialize
                render={props => (
                    <FormView {...{ isErrorPosting, isPosting }} {...props} />
                )}
            />
        </Paper>
    );
};

OrderForm.propTypes = {
    classes: PropTypes.object.isRequired,
    makePurchase: PropTypes.func.isRequired,
    isErrorPosting: PropTypes.bool,
    isPosting: PropTypes.bool.isRequired,
    profile: PropTypes.object.isRequired
};

export default withStyles(styles)(OrderForm);
