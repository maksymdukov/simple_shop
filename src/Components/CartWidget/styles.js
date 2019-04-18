const styles = (theme) => ({
    paper: {
        [theme.breakpoints.up("xs")]: {
            width: "80vw",
        },
        [theme.breakpoints.up("sm")]: {
            width: 400
        },
        [theme.breakpoints.up("md")]: {
            width: 500
        }
    },
    listContainer: {
        // maxHeight: 300,
        // overflow: "auto",
    },
    productList: {
    },
    price: {
        paddingRight: 10
    },
    priceTag: {
        color: theme.palette.primary.main
    },
    empty: {
        paddingLeft: 20
    },
    actionsContainer: {
        padding: 15
    },
    checkoutBtn: {

    }
});

export default styles;