const styles = (theme) => ({
    container: {
        borderBottom: `1px dashed ${theme.palette.divider}`,
        marginBottom: theme.spacing.unit * 2,
        '&:last-child': {
            borderBottom: "none",
            marginBottom: 0
        }
    },
    image: {
        width: "100%"
    },
    price: {
        color: theme.card.price.mainColor
    },
    descrWrapper: {
        padding: `0 ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`
    },
    name: {
    },
    description: {
        color: theme.palette.common.brown
    }
});

export default styles;