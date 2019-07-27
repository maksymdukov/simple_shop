import React from "react";
import PropTypes from "prop-types";

// MUI
import { Paper, withStyles } from "@material-ui/core";

// Styles
import styles from "./styles";

// Local components
import FormView from "./form";
import Spinner from "../../UI/Spinner";
import validationSchema from "./validation";

// Third-party
import { Formik } from "formik";

const ProfileForm = ({
    classes,
    onSubmit,
    profile,
    email,
    loading,
    uploading,
    uploadError,
    uploadSuccess
}) => {
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
    const handleSubmit = values => {
        const profile = { ...values };
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
                render={props => (
                    <FormView {...props} {...{ uploading, uploadError }} />
                )}
            />
            {loading && (
                <div className={classes.spinner}>
                    <Spinner />
                </div>
            )}
        </Paper>
    );
};

ProfileForm.propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    email: PropTypes.string,
    loading: PropTypes.bool,
    uploading: PropTypes.bool,
    uploadError: PropTypes.object,
    uploadSuccess: PropTypes.bool
};

export default withStyles(styles)(ProfileForm);
