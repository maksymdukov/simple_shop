const styles = (theme) => ({
    paper: {
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
});

export default styles;