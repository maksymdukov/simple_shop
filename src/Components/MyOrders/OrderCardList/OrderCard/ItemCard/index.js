import React from 'react';
import {Grid, Typography, withStyles} from "@material-ui/core";

const styles = (theme) => ({
    container: {
        borderBottom: `1px dashed ${theme.palette.divider}`,
        marginBottom: theme.spacing.unit * 2,
        '&:last-child': {
            borderBottom: "none",
            marginBottom: 0
        }
    },
    image: {
        width: "100%"
    },
    price: {
        color: theme.card.price.mainColor
    },
    descrWrapper: {
      padding: `0 ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`
    },
    name: {
    },
    description: {
        color: theme.palette.common.brown
    }
});

const ItemCard = ({classes, basketItem}) => {
    const {image, name} = basketItem;
    return (
        <Grid className={classes.container} container>
            <Grid item xs={3}>
                {image && <img className={classes.image} src={basketItem.image}/>}
            </Grid>
            <Grid item xs={8} className={classes.descrWrapper}>
                <Typography variant="h5" gutterBottom className={classes.name}>{basketItem.name}</Typography>
                <Grid container className={classes.description}>
                    {basketItem.ingredients &&
                        <Grid item xs={6}>
                            Ingredients:
                            <ul>
                                {basketItem.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
                            </ul>
                        </Grid>
                    }
                    {basketItem.additives &&
                        <Grid item  xs={6}>
                            Sauces:
                            <ul>
                                {Object.entries(basketItem.additives).map((add, idx) => (
                                    <li key={idx}>{add[0]} x{add[1]}</li>
                                ))}
                            </ul>
                        </Grid>
                    }
                </Grid>
            </Grid>
            <Grid item xs={1}>
                <div className={classes.quantity}>x{basketItem.quantity}</div>
                <div className={classes.price}>{basketItem.price} UAH</div>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(ItemCard);