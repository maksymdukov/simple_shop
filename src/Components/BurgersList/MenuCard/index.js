import React from 'react';
import {Card, CardActionArea, CardActions, CardMedia, IconButton, Typography, withStyles} from "@material-ui/core";
import IconPlus from '@material-ui/icons/PlusOne';

const styles = {
    card: {
        width: 250,
        margin: 5
    },
    media: {
        height: 140,
    },
};

const MenuCard = ({itemObj,classes}) => {
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <Typography gutterBottom variant="h4" component="h2">
                    {itemObj.name}
                </Typography>
                <CardMedia
                    className={classes.media}
                    image={itemObj.image}
                    title={itemObj.name}
                />
            </CardActionArea>
            <CardActions>
                <IconButton>
                    <IconPlus/>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default withStyles(styles)(MenuCard);