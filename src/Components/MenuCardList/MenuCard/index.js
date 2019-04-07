import React, {Fragment} from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    IconButton,
    Typography,
    withStyles
} from "@material-ui/core";
import IconPlus from '@material-ui/icons/Add';
import IconMinus from '@material-ui/icons/Remove'
import IconBasket from '@material-ui/icons/ShoppingBasketTwoTone';

const styles = {
    card: {
        width: 250,
        margin: 5,
    },
    media: {
        height: 140,
    },
    addToBasket: {
        backgroundColor: "green",
        color: "white"
    },
    removeFromBasket: {
        backgroundColor: "red",
        color: "white"
    },
    cardAction: {
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column"
    }
};

const MenuCard = ({itemObj,classes, isInBasket, indexInBasket, basketObj, addItemToBasket, removeItemFromBasket, plusQuantity, minusQuantity}) => {

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
                <Button className={classes.removeFromBasket} onClick={()=>removeItemFromBasket(indexInBasket)}>
                    Удалить из корзины
                </Button>
            </Fragment>
        );
    } else {
        actionSection = (
            <Button className={classes.addToBasket} onClick={()=>addItemToBasket(itemObj)}>
                Добавить в корзину
            </Button>
        )
    }

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <Typography gutterBottom variant="h5" component="h2" align="center">
                    {itemObj.name}
                </Typography>
                <CardMedia
                    className={classes.media}
                    image={itemObj.image}
                    title={itemObj.name}
                />
            </CardActionArea>
            <CardActions className={classes.cardAction}>
                {actionSection}
            </CardActions>
        </Card>
    );
};

export default withStyles(styles)(MenuCard);