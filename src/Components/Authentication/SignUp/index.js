import React, { Fragment } from "react";
import PropTypes from "prop-types";

// MUI
import { Typography } from "@material-ui/core";

// Third-party components
import { Formik } from "formik";

// Local components
import SignUpForm from "./form";

// Schema
import validationSchema from "./validation";

const SignUp = ({
    toSignInMode,
    doSignUp,
    signUpSuccess,
    errorMessage,
    signUpLoading
}) => {
    const initValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    };
    const onSubmitHandler = (values, actions) => {
        doSignUp(values.email, values.password, values.name);
    };

    return (
        <Fragment>
            {signUpSuccess ? (
                <Typography variant="h4" align="center">
                    Registered successfully!
                </Typography>
            ) : (
                <Fragment>
                    {errorMessage && (
                        <Typography
                            variant="subtitle1"
                            color="primary"
                            align="center"
                        >
                            {errorMessage.message}
                        </Typography>
                    )}
                    <Formik
                        initialValues={initValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmitHandler}
                        render={props => (
                            <SignUpForm
                                {...props}
                                {...{ toSignInMode, signUpLoading }}
                            />
                        )}
                    />
                </Fragment>
            )}
        </Fragment>
    );
};

SignUp.propTypes = {
    toSignInMode: PropTypes.func.isRequired,
    doSignUp: PropTypes.func.isRequired,
    signUpSuccess: PropTypes.bool,
    errorMessage: PropTypes.object,
    signUpLoading: PropTypes.bool.isRequired
};

export default SignUp;
