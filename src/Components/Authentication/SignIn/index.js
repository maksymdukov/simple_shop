import React, { Fragment } from "react";
import PropTypes from "prop-types";

// MUI
import { Typography } from "@material-ui/core";

// Formik
import validationSchema from "./validation";
import { Formik } from "formik";

// Local components
import SignInForm from "./form";


const SignIn = ({
    toSignUpMode,
    doSignIn,
    signInLoading,
    signInError,
    handleClose,
    onlySignIn
}) => {
    const initValues = {
        email: "",
        password: ""
    };
    const onSubmitHandler = (values, actions) => {
        doSignIn(values.email, values.password).then(
            res => res && handleClose()
        );
    };
    return (
        <Fragment>
            {signInError && (
                <Typography variant="subtitle1" color="primary" align="center">
                    {signInError.message}
                </Typography>
            )}
            <Formik
                initialValues={initValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitHandler}
                render={props => (
                    <SignInForm
                        {...props}
                        {...{ toSignUpMode, signInLoading, onlySignIn }}
                    />
                )}
            />
        </Fragment>
    );
};

SignIn.defaultProps = {
    toSignUpMode: () => {}
};

SignIn.propTypes = {
    toSignUpMode: PropTypes.func.isRequired,
    doSignIn: PropTypes.func.isRequired,
    signInLoading: PropTypes.bool.isRequired,
    signInError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    handleClose: PropTypes.func.isRequired,
    onlySignIn: PropTypes.bool
};

export default SignIn;
