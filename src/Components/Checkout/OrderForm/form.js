import React from 'react';
import {withStyles, Button, TextField, Grid, MenuItem, CircularProgress} from "@material-ui/core";

const styles = (theme) => ({
    submitContainer: {
        marginTop: `${theme.spacing.unit * 3}px`,
        textAlign: "center"
    },
    submit: {
        fontSize: "1.5rem"
    }

});

const FormView = ({
                      classes,
                      values: { name, email, phone, city, address },
                      errors,
                      touched,
                      handleSubmit,
                      handleChange,
                      isValid,
                      setFieldTouched,
                      isErrorPosting,
                      isPosting
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
                placeholder="012-345-67-89"
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
            <div className={classes.submitContainer}>
                {isPosting
                    ? <CircularProgress color="primary"/>
                    : <Button
                        className={classes.submit}
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={!isValid}
                    >
                        {isErrorPosting ? "Try again" : "Order"}
                    </Button>
                }
            </div>
        </form>
    );
};

export default withStyles(styles)(FormView);