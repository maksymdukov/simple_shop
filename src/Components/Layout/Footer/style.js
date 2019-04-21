const styles = (theme) => ({
    contacts: {
        marginBottom: theme.spacing.unit * 2
    },
    contactsInner:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: theme.spacing.unit * 1,
        '&:last-child': {
            marginBottom: 0
        }
    },
    label: {
        marginLeft: theme.spacing.unit * 2
    },
    socials: {
        marginBottom: theme.spacing.unit
    },
    socialIcons: {
        fill: theme.palette.common.white,
        marginTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2,
        transition: "fill .2s linear",
        '&:hover': {
            fill: theme.palette.primary.main,
        }
    },
    sign: {
        marginBottom: theme.spacing.unit,
        color: theme.palette.common.grey
    },
});

export default styles;