const styles = theme => ({
    root: {
        display: "flex",
        marginBottom: "-40px",
        minHeight: "calc(100vh - 367px)"
    },
    content: {
        padding: 10,
        flex: 1,
        background: theme.palette.background.paper,
        position: "relative"
    },
    paper: {
        position: "sticky",
        overflow: "hidden"
    }
});

export default styles;
