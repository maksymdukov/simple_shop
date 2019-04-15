import React, {useState} from 'react';
import {Formik} from "formik";
import FormView from "./form";
import {Paper, Typography, withStyles} from "@material-ui/core";
import validationSchema from './validation';


const styles = (theme) => ({
    paper: {
        [theme.breakpoints.up('xs')]: {
            width: "95%"
        },
        [theme.breakpoints.up('sm')]: {
            width: "80%"
        },
        [theme.breakpoints.up('md')]: {
            width: 600
        },
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 5}px ${theme
            .spacing.unit * 2}px`
    },
});

const OrderForm = ({classes, makePurchase, isErrorPosting, isPosting, authState}) => {
    const initValues = {
        name: "",
        email: authState.isAnonymous ? "": authState.email,
        phone: "",
        city: "Kyiv",
        address: ""
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
                    render={ (props) => <FormView {...{isErrorPosting, isPosting}} {...props} /> }
                />
            </Paper>
    );
};

export default withStyles(styles)(OrderForm);