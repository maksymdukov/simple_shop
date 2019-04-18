import React from 'react';
import {IconButton, Typography, withStyles} from "@material-ui/core";
import IconRemove from '@material-ui/icons/Clear';
import IconMinus from '@material-ui/icons/Remove'
import IconPlus from '@material-ui/icons/Add';
import IconEdit from '@material-ui/icons/Edit';
import BurgerOnHoverContent from "../../BurgerCardList/MenuCard/BurgerOnHoverContent";
import OnHoverContent from "../../BurgerCardList/MenuCard/OnHoverContent";
import styles from './styles';

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