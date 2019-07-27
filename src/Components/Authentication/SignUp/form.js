import React from "react";
import PropTypes from "prop-types";

// MUI
import {
    withStyles,
    Button,
    TextField,
    CircularProgress
} from "@material-ui/core";

const styles = theme => ({
    submitContainer: {
        marginTop: `${theme.spacing.unit * 3}px`,
        display: "flex",
        justifyContent: "space-between"
    }
});

const SignUpForm = ({
    classes,
    toSignInMode,
    values: { name, email, password, confirmPassword },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    signUpLoading
}) => {
    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
                id="name"
                name="name"
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                label="Name"
                value={name}
                margin="normal"
                onChange={change.bind(null, "name")}
                fullWidth
            />
            <TextField
                id="email"
                name="email"
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                value={email}
                margin="normal"
                onChange={change.bind(null, "email")}
                label="Email"
                fullWidth
            />
            <TextField
                id="password"
                name="password"
                helperText={touched.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}
                value={password}
                onChange={change.bind(null, "password")}
                label="Password"
                margin="normal"
                type="password"
                fullWidth
            />
            <TextField
                id="confirmPassword"
                name="confirmPassword"
                helperText={
                    touched.confirmPassword ? errors.confirmPassword : ""
                }
                error={
                    touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                label="Confirm Password"
                margin="normal"
                fullWidth
                type="password"
                value={confirmPassword}
                onChange={change.bind(null, "confirmPassword")}
            />
            <div className={classes.submitContainer}>
                {signUpLoading ? (
                    <CircularProgress color="primary" />
                ) : (
                    <Button
                        className={classes.submit}
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={!isValid}
                    >
                        Register
                    </Button>
                )}
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={toSignInMode}
                >
                    Sign in
                </Button>
            </div>
        </form>
    );
};

SignUpForm.propTypes = {
    classes: PropTypes.object.isRequired,
    toSignInMode: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    isValid: PropTypes.bool.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
    signUpLoading: PropTypes.bool.isRequired
};

export default withStyles(styles)(SignUpForm);
