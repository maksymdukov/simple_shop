const styles = (theme) => ({
    fabContainer: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: 10
    },
    fab: {
        marginRight: 10,
        backgroundColor: theme.card.price.mainColor,
        color: theme.card.frontSide.backgroundColor
    },
    toolbar: {
        justifyContent: "center",
    },
    title: {
        fontWeight: 300,
        '& span': {
            color: theme.card.price.mainColor
        }
    },
    container: {
        overflow: "auto",
        paddingBottom: 70
    },
    paper: {
        overflow: "auto",
        [theme.breakpoints.down("xs")]: {
        margin: 20,
        },
    }
});

export default styles;