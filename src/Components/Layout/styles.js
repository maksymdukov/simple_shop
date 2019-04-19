import background from '../../assets/dub-kantenberi2.jpg';

const styles = (theme) => ({
    header: {
        height: 200,
        backgroundImage: "url(https://mrgrill.com.ua/wp-content/uploads/2017/09/banner.jpg)",
        backgroundSize: "cover",
        position: "relative",
        boxShadow: theme.shadows[3]
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
        marginBottom: theme.spacing.unit * 5,
        position: "relative",
    },
    footer: {
        height: 200,
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        position: "relative",
    }
});

export default styles;