import React from "react";
import PropTypes from "prop-types";

// MUI
import {
    withStyles,
    Button,
    TextField,
    MenuItem,
    CircularProgress,
    Typography
} from "@material-ui/core";

const styles = theme => ({
    submitContainer: {
        marginTop: `${theme.spacing.unit * 3}px`,
        textAlign: "center"
    },
    submit: {}
});

const FormView = ({
    classes,
    values: { name, email, phone, city, address, password, confirmPassword },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    uploading,
    uploadError
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
                value={name}
                onChange={change.bind(null, "name")}
                label="Name"
                margin="normal"
                fullWidth
            />
            <TextField
                id="email"
                name="email"
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                value={email}
                onChange={change.bind(null, "email")}
                label="Email"
                margin="normal"
                disabled
                fullWidth
            />
            <TextField
                id="phone"
                name="phone"
                helperText={touched.phone ? errors.phone : ""}
                error={touched.phone && Boolean(errors.phone)}
                value={phone}
                onChange={change.bind(null, "phone")}
                label="Phone"
                margin="normal"
                fullWidth
            />
            <TextField
                id="city"
                name="city"
                select
                value={city}
                helperText={touched.city ? errors.city : ""}
                error={touched.city && Boolean(errors.city)}
                onChange={change.bind(null, "city")}
                fullWidth
                disabled
                label="City"
                margin="normal"
            >
                <MenuItem key="Kyiv" value="Kyiv">
                    Kyiv
                </MenuItem>
            </TextField>
            <TextField
                id="address"
                name="address"
                label="Address line"
                value={address}
                helperText={touched.address ? errors.address : ""}
                error={touched.address && Boolean(errors.address)}
                onChange={change.bind(null, "address")}
                fullWidth
                margin="normal"
            />
            <TextField
                id="password"
                name="password"
                helperText={touched.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}
                value={password}
                onChange={change.bind(null, "password")}
                label="New password"
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
                label="Confirm new password"
                margin="normal"
                fullWidth
                type="password"
                value={confirmPassword}
                onChange={change.bind(null, "confirmPassword")}
            />
            <div className={classes.submitContainer}>
                {uploadError ? (
                    <Typography color="primary" variant="h5" align="center">
                        {uploadError.message || uploadError.code}
                    </Typography>
                ) : null}
                {uploading ? (
                    <CircularProgress color="primary" />
                ) : (
                    <Button
                        className={classes.submit}
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={!isValid}
                    >
                        {uploadError ? "Try again" : "Update"}
                    </Button>
                )}
            </div>
        </form>
    );
};

FormView.propTypes = {
    classes: PropTypes.object.isRequired,
    values: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    isValid: PropTypes.bool.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
    uploading: PropTypes.bool.isRequired,
    uploadError: PropTypes.object
};

export default withStyles(styles)(FormView);
