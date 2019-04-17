import React, {Fragment} from 'react';
import {withStyles, Button, Dialog, DialogActions, DialogContent, Fade, Typography} from "@material-ui/core";
import {Formik} from "formik";
import SignInForm from "./form";
import validationSchema from "./validation";

const styles = (theme) => ({

});

const SignIn = ({classes, toSignUpMode, doSignIn, signInLoading, signInError, handleClose, onlySignIn}) => {
    const initValues = {
        email: "",
        password: ""
    };
    const onSubmitHandler = (values, actions) => {
            doSignIn(values.email, values.password)
                .then( (res) => res && handleClose() );
    };
    return (
        <Fragment>
            {signInError &&
            <Typography variant="subtitle1" color="primary" align="center">{signInError.message}</Typography>
            }
            <Formik
                initialValues={initValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitHandler}
                render={ (props) => <SignInForm {...props} {...{toSignUpMode, signInLoading, onlySignIn}} /> }
            />
        </Fragment>
    );
};

export default withStyles(styles)(SignIn);