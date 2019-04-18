const styles = theme => ({
    root: {
        display: "flex",
        borderBottom: `1px solid ${theme.palette.divider}`,
        '&:last-child': {
            borderBottom: "none"
        }
    },
    quantity: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
    itemPrice: {
        color: "#d2a006"
    }
});

export default styles;