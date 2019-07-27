const styles = theme => ({
    container: {
        padding: "20px 5px 120px 5px"
    },
    fixedControls: {
        position: "fixed",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        left: "50%",
        transform: "translateX(-50%)"
    },
    cartIcon: {
        textAlign: "center",
        marginBottom: 2
    },
    fab: {
        backgroundColor: theme.card.price.mainColor,
        color: theme.card.frontSide.backgroundColor
    },
    paper: {
        width: "auto",
        padding: "10px 40px",
        backgroundColor: theme.card.frontSide.backgroundColor,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    priceTagWrapper: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        textAlign: "center",
        "& > p": {
            padding: 5,
            margin: 0
        }
    },
    priceTag: {
        color: theme.card.price.mainColor
    }
});

export default styles;
