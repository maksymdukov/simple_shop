import React, {Fragment} from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions, CardContent, CardHeader,
    CardMedia, Divider,
    IconButton, Tooltip,
    Typography,
    Grid,
    withStyles
} from "@material-ui/core";
import IconPlus from '@material-ui/icons/Add';
import IconMinus from '@material-ui/icons/Remove'

import AddToBasket from "../../UI/Buttons/AddToBasket";
import RemoveFromBasket from "../../UI/Buttons/RemoveFromBasket";
import BurgerOnHoverContent from "./BurgerOnHoverContent";
import OnHoverContent from "./OnHoverContent";
import ScrollBar from "../../UI/ScrollBar";

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
        '&:hover $areaBack': {
            zIndex: 10,
            opacity: 0.9
        },
        '&:hover $areaFront': {
        },
        '&:hover': {
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

const MenuCard = ({
                      type,
                      itemObj,
                      classes,
                      isInBasket,
                      indexInBasket,
                      basketObj,
                      addItemToBasket,
                      removeItemFromBasket,
                      plusQuantity,
                      minusQuantity,
                      onAreaClick,
                      showNotification
}) => {
    let addToBasketHandler = () => {
        showNotification(itemObj.name);
        addItemToBasket(itemObj);
    };
    let actionSection;
    if (isInBasket) {
        actionSection = (
                <Grid container alignItems="stretch" className={classes.actionContainer}>
                    <Grid item xs={6} className={classes.verticalDivider}>
                        <IconButton className={classes.iconButtonPlus} onClick={()=>minusQuantity(indexInBasket)}>
                            <IconMinus/>
                        </IconButton>
                        {basketObj.quantity}
                        <IconButton className={classes.iconButtonMinus} onClick={()=>plusQuantity(indexInBasket)}>
                            <IconPlus/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <RemoveFromBasket className={classes.removeFromBasketButton} fullWidth onClick={()=>removeItemFromBasket(indexInBasket)}>
                            Remove
                        </RemoveFromBasket>
                    </Grid>
                </Grid>
        );
    } else {
        actionSection = (
            <AddToBasket fullWidth className={classes.addToBasketButton} onClick={addToBasketHandler}>
                Add to cart
            </AddToBasket>
        )
    }

    return (
        <Card className={classes.card}>
            <div className={classes.area}>
                <div className={classes.areaFront}>
                    <CardMedia
                        className={classes.media}
                        image={itemObj.image}
                        title={itemObj.name}
                    />
                    <div className={classes.areaBack}>
                            {type === 'burger' &&
                            <BurgerOnHoverContent
                                onSettingsClick={()=>onAreaClick(itemObj)}
                                {...{itemObj}}
                            />}
                            {type === 'normal' &&
                            <OnHoverContent
                                {...{itemObj}}
                            />}
                    </div>
                </div>
                <Divider className={classes.divider}/>
                <div className={classes.areaBottom}>
                    <Typography gutterBottom variant="h6" component="h2" align="left" className={classes.productName}>
                        {itemObj.name}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" align="right" className={classes.price}>
                        {itemObj.price} UAH
                    </Typography>
                </div>
                <Divider className={classes.divider}/>
                <CardActions className={classes.cardAction}>
                    {actionSection}
                </CardActions>
            </div>
        </Card>
    );
};

export default withStyles(styles)(MenuCard);