import React, {useRef} from 'react';

// MUI
import {
    Card,
    CardActions,
    CardMedia, Divider,
    IconButton,
    Typography,
    Grid,
    withStyles,
} from "@material-ui/core";

// Icons
import IconPlus from '@material-ui/icons/Add';
import IconMinus from '@material-ui/icons/Remove'

// Local components
import AddToBasket from "../../UI/Buttons/AddToBasket";
import RemoveFromBasket from "../../UI/Buttons/RemoveFromBasket";
import BurgerOnHoverContent from "./BurgerOnHoverContent";
import OnHoverContent from "./OnHoverContent";

// Styles
import styles from './styles';

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
                      isInSwiper,
                      showNotification
                  }) => {
    let cardRef = useRef(null);
    let addToBasketHandler = () => {
        console.log("CARD REF")
        console.log(cardRef)
        showNotification(itemObj.name);
        addItemToBasket(itemObj);
        if ('ontouchstart' in window || navigator.msMaxTouchPoints) {
            cardRef.current.focus();
        }
        // cardRef.current.focus();
    };
    let actionSection;
    if (isInBasket) {
        actionSection = (
            <Grid container alignItems="stretch" className={classes.actionContainer}>
                <Grid item xs={6} className={classes.verticalDivider}>
                    <IconButton className={classes.iconButtonPlus} onClick={() => minusQuantity(indexInBasket)}>
                        <IconMinus/>
                    </IconButton>
                    {basketObj.quantity}
                    <IconButton className={classes.iconButtonMinus} onClick={() => plusQuantity(indexInBasket)}>
                        <IconPlus/>
                    </IconButton>
                </Grid>
                <Grid item xs={6}>
                    <RemoveFromBasket className={classes.removeFromBasketButton} fullWidth
                                      onClick={() => removeItemFromBasket(indexInBasket)}>
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
            <div className={classes.area} ref={cardRef} tabIndex={0}>
                <div className={isInSwiper ? `${classes.areaFront} ${classes.areaFrontSpecial}` : classes.areaFront}>
                    <CardMedia
                        className={classes.media}
                        title={itemObj.name}
                        image='div'
                        style={{
                            background: `url(${itemObj.image}) center/contain no-repeat, #fff`,
                        }}
                    />
                    <div className={classes.areaBack}>
                        {type === 'burger' &&
                        <BurgerOnHoverContent
                            onSettingsClick={() => onAreaClick(itemObj)}
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