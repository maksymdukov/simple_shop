import bestSeller from '../../assets/Best-Seller-PNG-File.png';

const styles = (theme) => ({
    intro: {
        height: "calc(100vh - 200px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    hungry:{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        padding: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 2
    },
    something: {
        backgroundColor: theme.palette.common.darkGrey,
        color: theme.palette.common.white,
        padding: theme.spacing.unit * 3
    },
    arrowDown: {
        marginTop: 50
    },
    videoSection: {
        position: "relative",
        height: "calc(80vh - 70px)",
        overflow: "hidden"
    },
    video: {
        width: "100%",
    },
    videoHeader: {
        zIndex: "2",
        color: "white",
        position: "absolute",
        top: 50,
        left: 50
    },
    menuBtn: {
        backgroundColor: theme.card.price.mainColor,
        '&:hover': {
            backgroundColor: theme.card.price.mainColor,
            filter: 'brightness(150%)'
        }
    },
    popularSlide: {
        marginLeft: 10,
        position: "relative",
        '&::before': {
            content: "''",
            display: "block",
            position: "absolute",
            top: -5,
            left: -5,
            backgroundImage: `url(${bestSeller})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: 'no-repeat',
            width: 21,
            height: 50,
            zIndex: 20
        }
    }
});

export default styles;