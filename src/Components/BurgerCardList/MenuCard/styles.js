const styles = (theme) => ({
    card: {
        width: 300,
        margin: "15px 5px",
    },
    media: {
        height: 200,
        backgroundSize: "100%"
    },
    addToBasket: {
        backgroundColor: "green",
        color: "white"
    },
    cardAction: {
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        padding: 0,
        height: 50
    },
    price: {
        color: theme.card.price.mainColor
    },
    areaBack: {
        zIndex: -10,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0,
        backgroundColor: theme.card.backSide.backgroundColor,
        transition: "opacity .2s linear",
        overflow: "auto"
    },
    areaFront: {
        transition: "opacity .2s linear",
        position: "relative"
    },
    area: {
        '&:hover $areaBack, &:focus $areaBack': {
            zIndex: 10,
            opacity: 0.9
        },
        '&:hover $areaFront, &:focus $areaFront': {
        },
        '&:hover, &:focus': {
            backgroundColor: theme.card.backSide.backgroundColor,
            color: theme.card.backSide.textColor,
            '& $productName': {
                color: theme.card.backSide.textColor
            },
            '& $addToBasketButton': {
                backgroundColor: theme.card.price.mainColor
            },
            '& $removeFromBasketButton': {
                backgroundColor: theme.palette.primary.dark
            },
            '& $verticalDivider': {
                borderColor: theme.card.backSide.dividerColor
            },
            '& $divider': {
                backgroundColor: theme.card.backSide.dividerColor
            }
        }
    },
    productName: {},
    settingIcon: {},
    divider: {},
    areaBottom: {
        display: "flex",
        justifyContent: "space-between",
        margin: "10px 0",
        padding: "0 10px",
        alignItems: "baseline"
    },
    addToBasketButton: {
        backgroundColor: theme.card.frontSide.backgroundColor,
        height: "100%"
    },
    removeFromBasketButton: {
        backgroundColor: theme.card.frontSide.backgroundColor,
        height: "100%"
    },
    actionContainer: {
        height: "100%"
    },
    iconButtonPlus: {
        color: "inherit"
    },
    iconButtonMinus: {
        color: "inherit"
    },
    verticalDivider: {
        borderRight: '0.1em solid',
        borderColor: theme.palette.divider,
        textAlign: "center"
    }
});

export default styles;