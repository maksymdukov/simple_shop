import React from 'react';
import {Grid, Typography, withStyles} from "@material-ui/core";
import styles from './styles';

const ItemCard = ({classes, basketItem}) => {
    const {
        image,
        name,
        ingredients,
        additives,
        quantity,
        price
    } = basketItem;
    return (
        <Grid className={classes.container} container>
            <Grid item xs={3}>
                {image && <img className={classes.image} src={image} alt={name}/>}
            </Grid>
            <Grid item xs={8} className={classes.descrWrapper}>
                <Typography variant="h5" gutterBottom className={classes.name}>{name}</Typography>
                <Grid container className={classes.description}>
                    {ingredients &&
                        <Grid item xs={6}>
                            Ingredients:
                            <ul>
                                {ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
                            </ul>
                        </Grid>
                    }
                    {additives &&
                        <Grid item  xs={6}>
                            Sauces:
                            <ul>
                                {Object.entries(additives).map((add, idx) => (
                                    <li key={idx}>{add[0]} x{add[1]}</li>
                                ))}
                            </ul>
                        </Grid>
                    }
                </Grid>
            </Grid>
            <Grid item xs={1}>
                <div className={classes.quantity}>x{quantity}</div>
                <div className={classes.price}>{price} UAH</div>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(ItemCard);