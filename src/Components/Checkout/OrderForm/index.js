import React from 'react';
import {Formik} from "formik";
import FormView from "./form";
import {Paper, Typography, withStyles} from "@material-ui/core";
import validationSchema from './validation';
import styles from './styles';

const OrderForm = ({classes, makePurchase, isErrorPosting, isPosting, profile}) => {
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
                {isErrorPosting
                    ? <Typography color="primary" variant="h5" align="center">
                        {isErrorPosting.code || isErrorPosting.message}
                    </Typography>
                    :null}
                <Formik
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                    initialValues={initValues}
                    isInitialValid={validationSchema.isValidSync(initValues)}
                    enableReinitialize
                    render={ (props) => <FormView {...{isErrorPosting, isPosting}} {...props} /> }
                />
            </Paper>
    );
};

export default withStyles(styles)(OrderForm);