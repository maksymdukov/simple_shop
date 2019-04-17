import React from 'react';
import {IconButton, Typography, withStyles} from "@material-ui/core";
import IconRemove from '@material-ui/icons/Clear';
import IconMinus from '@material-ui/icons/Remove'
import IconPlus from '@material-ui/icons/Add';
import IconEdit from '@material-ui/icons/Edit';
import burgerLogo from '../../../../assets/burger-logo.png';
import BurgerOnHoverContent from "../../../BurgerCardList/MenuCard/BurgerOnHoverContent";
import OnHoverContent from "../../../BurgerCardList/MenuCard/OnHoverContent";

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

const Card = ({
                  classes,
                  cardClass,
                  basketItem,
                  plusQuantity,
                  minusQuantity,
                  removeItem,
                  handleEditBtnClick
}) => {
    return (
        <div className={classes.container}>
            <div className={classes.card}>
                <div className={classes.quantity}>
                    <IconButton className={classes.quantityControls} onClick={minusQuantity}>
                        <IconMinus fontSize="small"/>
                    </IconButton>
                    <div className={classes.circle}>{basketItem.quantity}</div>
                    <IconButton className={classes.quantityControls} onClick={plusQuantity}>
                        <IconPlus fontSize="small"/>
                    </IconButton>
                </div>
                <div className={classes.image}
                     style={basketItem.image && {
                         backgroundImage: `url(${basketItem.image})`
                     }}>
                    <div className={classes.area}>
                            <div className={classes.areaBack}>
                                {basketItem.ingredients
                                    ? <BurgerOnHoverContent
                                        itemObj={basketItem}
                                        customizeOff
                                    />
                                    : <OnHoverContent
                                        itemObj={basketItem}
                                    />
                                }
                            </div>
                    </div>
                </div>
                <div className={classes.title}>
                    <Typography variant="h5" component="h5">
                        {basketItem.name}
                    </Typography>
                </div>
                <div className={classes.price}>
                    <Typography variant="subtitle1" component="p">
                        {basketItem.price} UAH
                    </Typography>
                </div>
                <div className={classes.controls}>
                    <IconButton onClick={removeItem}>
                        <IconRemove color="error" fontSize="small"/>
                    </IconButton>
                    {basketItem.ingredients &&
                        <IconButton onClick={handleEditBtnClick}>
                            <IconEdit fontSize="small"/>
                        </IconButton>
                    }
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(Card);