const styles = theme => ({
    rootStatic: {
        backgroundColor: "transparent",
        boxShadow: "none"
    },
    rootFixed: {
        backgroundColor: "white"
    },
    toolbar: {
        padding: 4,
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.up('md')]: {
            justifyContent: "initial"
        }
    },
    toolbarFixed: {},
    navItems: {
        display: "none",
        [theme.breakpoints.up('md')]: {
            display: "block",
            flex: 1,
            textAlign: "center"
        }
    },
    drawerToggler: {
        [theme.breakpoints.up('md')]: {
            display: "none"
        }
    },
    togglerIcon: {
        color: "white"
    },
    togglerIconFixed: {
        color: "grey"
    },
    shoppingCart: {
        color: "white",
        marginLeft: 10,
        marginRight: 10
    },
    shoppingCartFixed: {
        color: "grey"
    },
    logo: {
        height: 50,
        backgroundColor: "transparent",
        margin: 10,
        flex: 1,
        [theme.breakpoints.up('md')]: {
            flex: 0
        }
    },
    login: {
        transition: "color 0.2s linear",
        // display: "none",
        '&:hover': {
            // backgroundColor: "white"
            color: theme.palette.primary.main
        },
        [theme.breakpoints.up('sm')]: {
            display: "block"
        }
    },
    loginFixed: {
        color: "grey"
    }
});

export default styles;