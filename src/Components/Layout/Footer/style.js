const styles = theme => ({
    contacts: {
        display: "flex",
        justifyContent: "center",
        marginBottom: theme.spacing.unit * 2
    },
    contactIcon: {
        verticalAlign: "middle"
    },
    contactContainer: {
        [theme.breakpoints.up(600)]: {
            width: "100%",
            display: "flex",
            justifyContent: "space-around"
        }
    },
    label: {
        marginLeft: theme.spacing.unit * 2,
        verticalAlign: "middle"
    },
    socials: {
        marginBottom: theme.spacing.unit
    },
    socialIcons: {
        fill: theme.palette.common.white,
        marginTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2,
        transition: "fill .2s linear",
        "&:hover": {
            fill: theme.palette.primary.main
        }
    },
    sign: {
        marginBottom: theme.spacing.unit,
        color: theme.palette.common.grey
    }
});

export default styles;
