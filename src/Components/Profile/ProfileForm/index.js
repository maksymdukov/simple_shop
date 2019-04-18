import React from 'react';
import {Formik} from "formik";
import FormView from "./form";
import {Paper, withStyles} from "@material-ui/core";
import validationSchema from './validation';
import Spinner from "../../UI/Spinner";
import styles from './styles'

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
    const handleSubmit = (values) => {
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