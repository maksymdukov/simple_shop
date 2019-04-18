const styles = (theme) => ({
    card: {
        // border: "1px solid grey",
        width: "100%",
        height: "100%",
        position: "relative",
        // transformOrigin:"center center",
        // transform: "rotateX(-20deg)",
        // transition: "transform 0.3s linear",
        // transformStyle: "preserve-3d",
        '&:hover': {
            // transform: "rotateX(0deg)"
        }
    },
    container: {
        // perspective: 1000,
        width: "100%",
        height: "100%",
    },
    image: {
        boxShadow: theme.shadows[10],
        height: 200,
        width: "100%",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        '& img': {
            width: "100%"
        }
    },
    title: {
        marginTop: 20,
        textAlign: 'center'
    },
    price: {
        '& p': {
            color: theme.card.price.mainColor
        },
        textAlign: 'center'
    },
    controls: {
        textAlign: "center"
    },
    quantity: {
        position: "absolute",
        top: -20,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        zIndex: 15
    },
    circle: {
        width: 35,
        height: 35,
        borderRadius: "50%",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.card.frontSide.backgroundColor,
        margin: "0 5px"
    },
    quantityControls: {
        backgroundColor: theme.card.frontSide.backgroundColor,
        boxShadow: theme.shadows[5],
        padding: 0
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
    area: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "100%",
        '&:hover $areaBack': {
            zIndex: 9,
            opacity: 0.9
        },
        '&:hover': {
            color: theme.card.backSide.textColor,
        }
    }
});

export default styles;