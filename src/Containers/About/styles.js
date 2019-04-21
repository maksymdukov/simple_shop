import burgerIcon from '../../assets/burder-icon.png'

const styles = (theme) => ({
    bestContainer: {
        paddingLeft: theme.spacing.unit * 5,
        alignItems: "center",
        backgroundColor: theme.palette.common.white,
        lineHeight: 0
    },
    title:{
        marginBottom: theme.spacing.unit * 3,
    },
    aboutUsPic: {
        width: "100%"
    },
    paper:  {
        lineHeight: 0,
        margin: theme.spacing.unit * 5,
    },
    statisticContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center",
        textAlign: "center"
    },
    statisticWrapper: {
        padding: 10
    },
    titleText: {
    },
    burgerContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        minHeight: 100
    },
    burger: {
        width: "60%",
        height: "60%",
        background: `url(${burgerIcon}) center center no-repeat`,
        backgroundSize: "contain",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
    founders: {

    },
    personCard: {
        lineHeight: "initial",
        boxShadow: theme.shadows[1],
        textAlign: "center",
        paddingBottom: theme.spacing.unit
    },
    personIcon: {
        width: "100%",
    },
    position: {
        color: theme.palette.common.grey
    },
    email: {
        color: theme.palette.primary.main
    }
});

export default styles;