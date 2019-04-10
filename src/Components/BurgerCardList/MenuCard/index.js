import React, {Fragment} from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions, CardContent, CardHeader,
    CardMedia,
    IconButton, Tooltip,
    Typography,
    withStyles
} from "@material-ui/core";
import IconPlus from '@material-ui/icons/Add';
import IconMinus from '@material-ui/icons/Remove'

import AddToBasket from "../../UI/Buttons/AddToBasket";
import RemoveFromBasket from "../../UI/Buttons/RemoveFromBasket";
import BurgerOnHoverContent from "./BurgerOnHoverContent";
import OnHoverContent from "./OnHoverContent";

const styles = {
    card: {
        width: 300,
        margin: 5,
    },
    media: {
        height: 200
    },
    addToBasket: {
        backgroundColor: "green",
        color: "white"
    },
    cardAction: {
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column"
    },
    price: {
        color: "#d2a006"
    },
    areaBack: {
        zIndex: -10,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0,
        transition: "opacity .2s linear"
    },
    areaFront: {
        opacity: 1,
        transition: "opacity .2s linear"
    },
    area: {
        position: "relative",
        '&:hover $areaBack': {
            zIndex: 10,
            opacity: 0.9,
            backgroundColor: "#d692a0"
        },
        '&:hover $areaFront': {
            opacity: 1,
            zIndex: -10
        }
    }
};

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
                      onAreaClick
}) => {

    let actionSection;
    if (isInBasket) {
        actionSection = (
            <Fragment>
                <div>
                    <IconButton onClick={()=>minusQuantity(indexInBasket)}>
                        <IconMinus/>
                    </IconButton>
                    {basketObj.quantity}
                    <IconButton onClick={()=>plusQuantity(indexInBasket)}>
                        <IconPlus/>
                    </IconButton>
                </div>
                <RemoveFromBasket onClick={()=>removeItemFromBasket(indexInBasket)}>
                    Удалить из корзины
                </RemoveFromBasket>
            </Fragment>
        );
    } else {
        actionSection = (
            <AddToBasket onClick={ () => addItemToBasket(itemObj) }>
                Добавить в корзину
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
                </div>
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
            <CardActions className={classes.cardAction}>
                <Typography gutterBottom variant="h6" align="left" className={classes.price}>
                    {itemObj.price} UAH
                </Typography>
                <Typography gutterBottom variant="h6" component="h2" align="right">
                    {itemObj.name}
                </Typography>
                {actionSection}
            </CardActions>
        </Card>
    );
};

export default withStyles(styles)(MenuCard);