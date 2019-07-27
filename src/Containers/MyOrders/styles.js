const styles = theme => ({
    orders: {
        margin: "auto",
        [theme.breakpoints.up("xs")]: {
            width: "100%"
        },
        [theme.breakpoints.up("md")]: {
            width: "80%"
        },
        [theme.breakpoints.up("lg")]: {
            width: "70%"
        }
    }
});

export default styles;
