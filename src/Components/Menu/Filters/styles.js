const styles = theme => ({
    filters: {
        display: "block",
        justifyContent: "flex-end",
        margin: theme.spacing.unit * 2,
        [theme.breakpoints.up("400")]: {
            display: "flex",
            justifyContent: "flex-end"
        }
    },
    filtersWrapper: {
        flexDirection: "column",
        boxShadow: theme.shadows[5],
        display: "flex",
        [theme.breakpoints.up("400")]: {
            flexDirection: "row"
        }
    },
    filter: {
        width: "100%",
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing.unit * 2,
        textTransform: "uppercase",
        borderRight: `1px solid ${theme.palette.common.brightGrey}`,
        letterSpacing: "0.1em",
        cursor: "pointer",
        transition:
            "filter .15s linear, background-color .15s linear, color .15s linear",
        "&:hover": {
            filter: "brightness(75%)"
        },
        "&:last-child": {
            borderRight: `none`
        },
        [theme.breakpoints.up(400)]: {
            width: "auto"
        }
    },
    filterActive: {
        backgroundColor: theme.card.price.mainColor,
        color: theme.palette.common.white
    }
});

export default styles;
