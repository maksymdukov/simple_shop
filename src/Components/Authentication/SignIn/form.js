import React from 'react';
import {withStyles, Button, TextField, Grid, MenuItem, CircularProgress} from "@material-ui/core";

const styles = (theme) => ({
    submitContainer: {
        marginTop: `${theme.spacing.unit * 3}px`,
        display: "flex",
        justifyContent: "space-between"
    },
    // submit: {
    //     fontSize: "1.5rem"
    // }

});

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
                      signInLoading
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
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={toSignUpMode}
                >
                    Sign up
                </Button>
            </div>
        </form>
    );
};

export default withStyles(styles)(SignInForm);