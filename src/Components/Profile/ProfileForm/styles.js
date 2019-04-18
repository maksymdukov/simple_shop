const styles = (theme) => ({
    paper: {
        position: "relative",
        [theme.breakpoints.up('xs')]: {
            width: "95%"
        },
        [theme.breakpoints.up('sm')]: {
            width: "80%"
        },
        [theme.breakpoints.up('md')]: {
            width: 600
        },
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 5}px ${theme
            .spacing.unit * 2}px`
    },
    spinner: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    updSuccess: {
        animation: "greenOut 1s ease-in-out"
    },
    updFail: {
        animation: "redOut 1s ease-in-out"
    },
    '@keyframes greenOut': {
        from: {backgroundColor: theme.additionalColors.success},
        to: {backgroundColor: theme.palette.background.paper}
    },
    '@keyframes redOut': {
        from: {backgroundColor: theme.palette.primary.main},
        to: {backgroundColor: theme.palette.background.paper}
    }
});

export default styles;