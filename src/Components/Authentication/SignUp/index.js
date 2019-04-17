import React, {Fragment} from 'react';
import {withStyles, Button, Dialog, DialogActions, DialogContent, Typography} from "@material-ui/core";
import {Formik} from "formik";
import SignUpForm from "./form";
import validationSchema from "./validation";

const styles = (theme) => ({

});

const SignUp = ({classes, toSignInMode, doSignUp, signUpSuccess, errorMessage, signUpLoading}) => {
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
            {signUpSuccess
                ? <Typography variant="h4" align="center">Registered successfully!</Typography>
                : <Fragment>
                    {errorMessage &&
                    <Typography variant="subtitle1" color="primary" align="center">{errorMessage.message}</Typography>
                    }
                    <Formik
                        initialValues={initValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmitHandler}
                        render={ (props) => <SignUpForm {...props} {...{toSignInMode, signUpLoading}} /> }
                    />
                </Fragment>
            }
        </Fragment>
    );
};

export default withStyles(styles)(SignUp);