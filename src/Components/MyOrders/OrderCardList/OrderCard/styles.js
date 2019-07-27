const styles = theme => ({
    card: {
        backgroundColor: theme.palette.common.brightBrown,
        marginBottom: theme.spacing.unit * 2,
        transition: "box-shadow .1s linear, background-color .2s linear",
        "&:hover": {
            boxShadow: `0px 3px 3px -1px ${
                theme.palette.primary.main
            }, 0px 3px 3px 0px ${theme.palette.primary.main}, 0px 1px 5px 0px ${
                theme.palette.primary.main
            }`
        }
    },
    details: {
        display: "block"
    },
    price: {
        color: theme.palette.primary.main
    },
    orderTaken: {
        backgroundColor: theme.additionalColors.successLight
    }
});

export default styles;
