import React from 'react';
import PropTypes from 'prop-types';

// MUI
import {withStyles, Button, TextField, CircularProgress} from "@material-ui/core";
import styles from './styles';

const SignInForm = ({
                      classes,
                      toSignUpMode,
                      values: { email, password },
                      errors,
                      touched,
                      handleSubmit,
                      handleChange,
                      isValid,
                      setFieldTouched,
                      signInLoading,
                      onlySignIn
                  }) => {

    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
                id="email"
                name="email"
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                value={email}
                onChange={change.bind(null, "email")}
                label="Email"
                margin="normal"
                fullWidth
            />

            <TextField
                id="password"
                name="password"
                type="password"
                helperText={touched.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}
                value={password}
                onChange={change.bind(null, "password")}
                label="Password"
                margin="normal"
                fullWidth
            />

            <div className={classes.submitContainer}>
                {signInLoading
                    ? <CircularProgress color="primary"/>
                    : <Button
                        className={classes.submit}
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={!isValid}
                    >
                        Login
                    </Button>
                }
                {!onlySignIn &&
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={toSignUpMode}
                    >
                        Sign up
                    </Button>
                }
            </div>
        </form>
    );
};

SignInForm.propTypes = {
    classes: PropTypes.object.isRequired,
    toSignUpMode: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    isValid: PropTypes.bool.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
    signInLoading: PropTypes.bool.isRequired,
    onlySignIn: PropTypes.bool
};

export default withStyles(styles)(SignInForm);