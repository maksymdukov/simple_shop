const styles = theme => ({
    closeBtn: {
        position: "absolute",
        right: 0,
        top: 0
    },
    paper: {
        maxHeight: "none",
        [theme.breakpoints.up("xs")]: {
            width: "90%"
        },
        [theme.breakpoints.up("sm")]: {
            width: 400
        }
    },
    title: {
        textAlign: "center"
    }
});

export default styles;
