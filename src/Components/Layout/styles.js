const styles = theme => ({
    header: {
        height: 200,
        backgroundImage:
            "url(https://mrgrill.com.ua/wp-content/uploads/2017/09/banner.jpg)",
        backgroundSize: "cover",
        position: "relative",
        boxShadow: theme.shadows[3]
    },
    pageTitle: {
        position: "absolute",
        bottom: 20,
        width: "100%",
        fontWeight: 100,
        color: theme.palette.common.grey
    },
    main: {
        paddingBottom: theme.spacing.unit * 5,
        position: "relative",
        minHeight: "calc(100vh - 437px)",
        [theme.breakpoints.up(600)]: {
            minHeight: "calc(100vh - 367px)"
        }
    },
    footer: {
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.common.darkGrey,
        color: theme.palette.common.white
    }
});

export default styles;
