const styles = (theme) => ({
    filters: {
        display: "flex",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        margin: theme.spacing.unit * 2,
        // boxShadow: theme.shadows[5]
    },
    filtersWrapper: {
        boxShadow: theme.shadows[5],
        display: "flex"
    },
    filter: {
        backgroundColor: theme.palette.common.white,
        // marginRight: theme.spacing.unit * 2,
        padding: theme.spacing.unit * 2,
        textTransform: "uppercase",
        // borderTop: `1px solid ${theme.palette.common.brightGrey}`,
        borderRight: `1px solid ${theme.palette.common.brightGrey}`,
        // borderBottom: `1px solid ${theme.palette.common.brightGrey}`,
        // boxShadow: theme.shadows[5],
        letterSpacing: '0.1em',
        cursor: "pointer",
        transition: "filter .15s linear, background-color .15s linear, color .15s linear",
        '&:hover': {
            filter: 'brightness(75%)'
        },
        '&:last-child': {
            borderRight: `none`
        }
    },
    filterActive: {
        backgroundColor: theme.card.price.mainColor,
        color: theme.palette.common.white
    }
});

export default styles;