import React, {useEffect, useState} from 'react';
import {Formik} from "formik";
import FormView from "./form";
import {Paper, Typography, withStyles} from "@material-ui/core";
import validationSchema from './validation';
import Spinner from "../../UI/Spinner";


const styles = (theme) => ({
    paper: {
        position: "relative",
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
    spinner: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    updSuccess: {
        animation: "greenOut 1s ease-in-out"
    },
    updFail: {
        animation: "redOut 1s ease-in-out"
    },
    '@keyframes greenOut': {
        from: {backgroundColor: theme.additionalColors.success},
        to: {backgroundColor: theme.palette.background.paper}
    },
    '@keyframes redOut': {
        from: {backgroundColor: theme.palette.primary.main},
        to: {backgroundColor: theme.palette.background.paper}
    }
});

const ProfileForm = ({classes, onSubmit, profile, email, loading, uploading, uploadError, uploadSuccess}) => {
    const initValues = {
        name: "",
        email: email,
        phone: "",
        city: "Kyiv",
        address: "",
        password: "",
        confirmPassword: "",
        ...profile
    };
    const handleSubmit = (values, actions) => {
            const profile = {...values};
            onSubmit(profile);
    };

    const paperClasses = [classes.paper];
    if (uploadSuccess) paperClasses.push(classes.updSuccess);
    if (uploadError) paperClasses.push(classes.updFail);
    return (
            <Paper elevation={1} className={paperClasses.join(" ")}>
                <Formik
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                    initialValues={initValues}
                    enableReinitialize
                    render={ (props) => <FormView {...props} {...{uploading, uploadError}} /> }
                />
                {loading &&
                    <div className={classes.spinner}>
                        <Spinner/>
                    </div>
                }
            </Paper>
    );
};

export default withStyles(styles)(ProfileForm);