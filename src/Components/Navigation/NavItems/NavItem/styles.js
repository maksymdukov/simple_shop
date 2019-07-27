const styles = theme => ({
    root: {
        display: "flex",
        listStyle: "none",
        justifyContent: "center"
    },
    customButton: {
        transition: "color 0.2s linear",
        background: "none",
        margin: "0 5px",
        borderRadius: 0,
        color: theme.palette.common.darkGrey,
        "&:hover": {
            background: "none",
            borderRadius: 0,
            color: theme.palette.primary.main
        },
        [theme.breakpoints.up("md")]: {
            color: theme.palette.common.white
        }
    },
    customButtonActive: {
        borderBottom: `1px solid ${theme.palette.primary.main}`
    },
    customButtonFixed: {
        color: theme.palette.common.grey,
        "&:hover": {
            backgroundColor: theme.palette.common.white
        },
        [theme.breakpoints.up("md")]: {
            color: theme.palette.common.darkGrey
        }
    }
});

export default styles;
