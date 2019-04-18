const styles = (theme) => ({
    header: {
        height: 200,
        backgroundImage: "url(https://mrgrill.com.ua/wp-content/uploads/2017/09/banner.jpg)",
        backgroundSize: "cover",
        position: "relative"
    },
    pageTitle: {
        position: "absolute",
        bottom: 20,
        width: "100%",
        fontWeight: 100,
        // fontStyle: "italic",
        color: theme.palette.common.grey
    },
    main: {
        marginBottom: theme.spacing.unit * 5
    }
});

export default styles;