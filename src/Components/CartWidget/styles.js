const styles = theme => ({
    paper: {
        [theme.breakpoints.up("xs")]: {
            width: "80vw"
        },
        [theme.breakpoints.up("sm")]: {
            width: 400
        },
        [theme.breakpoints.up("md")]: {
            width: 500
        }
    },
    listContainer: {},
    productList: {},
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
        padding: 15,
        "& > div": {
            minWidth: 150
        }
    },
    checkoutBtn: {}
});

export default styles;
