const styles = theme => ({
    container: {
        padding: 4,
        color: theme.card.backSide.textColor
    },
    settings: {
        flexShrink: 0,
        alignSelf: "flex-start"
    },
    title: {
        display: "flex",
        justifyContent: "space-between"
    },
    description: {
        '&:first-letter': {
            textTransform: "capitalize"
        }
    }
});

export default styles;