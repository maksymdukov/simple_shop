const styles = theme => ({
    container: {
        color: theme.card.backSide.textColorSecondary,
        position: "relative",
        height: "100%"
    },
    settings: {
        color: theme.card.backSide.textColor
    },
    fixedControls: {
        zIndex: 10,
        position: "absolute",
        top: 0,
        right: 10,
    },
    title: {
        marginTop: 0
    },
    list: {
    },
    innerContainer: {
        padding: "8px"
    }
});

export default styles;