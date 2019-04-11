import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {AppBar, DialogActions, DialogContent, DialogTitle, Fab, Toolbar, Grid, Badge} from "@material-ui/core";
import BurgerEditor from "../../BurgerEditor";
import AddToBasket from "../../UI/Buttons/AddToBasket";
import IconAddToBasket from '@material-ui/icons/AddShoppingCartOutlined';

const styles = (theme) => ({
   fabContainer: {
       position: 'sticky',
       bottom: theme.spacing.unit * 2,
       top: "auto",
       textAlign: "right",
   },
    fab: {
       marginRight: 10,
        backgroundColor: theme.card.price.mainColor,
        color: theme.card.frontSide.backgroundColor
    },
    toolbar: {
       justifyContent: "center",
    },
    title: {
        fontWeight: 300,
        '& span': {
            color: theme.card.price.mainColor
        }
    }
});

const BurgerCardModal = ({classes, handleClose, item, basket, addToBasket, removeFromBasket, opened, addItemToBasket, burgerEditorState, initIngredients, showNotification}) => {
    const handleAddToBasket = () => {
        const item = {
            name: 'Custom Burger',
            ingredients: burgerEditorState.ingredients,
            additives: burgerEditorState.additives,
            price: burgerEditorState.burgerCost,
            id: Date.now()
        };
        addItemToBasket(item);
        handleClose();
        showNotification(item.name);
    };
    return (
        <div>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={opened}
                onExited={ () => initIngredients([],{}, burgerEditorState.menu.prices.initial) }
            >
                {/*<DialogTitle id="customized-dialog-title" onClose={handleClose}>*/}
                    {/*<IconButton aria-label="Close" onClick={handleClose}>*/}
                        {/*<CloseIcon />*/}
                    {/*</IconButton>*/}
                {/*</DialogTitle>*/}
                {/*<DialogContent>*/}
                    {/*<Typography gutterBottom>*/}
                        {/*Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac*/}
                        {/*facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum*/}
                        {/*at eros.*/}
                    {/*</Typography>*/}
                    {/*<Typography gutterBottom>*/}
                        {/*Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis*/}
                        {/*lacus vel augue laoreet rutrum faucibus dolor auctor.*/}
                    {/*</Typography>*/}
                    {/*<Typography gutterBottom>*/}
                        {/*Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel*/}
                        {/*scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus*/}
                        {/*auctor fringilla.*/}
                    {/*</Typography>*/}
                {/*</DialogContent>*/}
                {/*<DialogActions>*/}
                    {/*<div>test</div>*/}
                {/*</DialogActions>*/}
                <AppBar position="sticky" color="default">
                    <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" color="inherit" className={classes.title}>
                                Current cost: <span>{burgerEditorState.burgerCost} UAH</span>
                            </Typography>
                    </Toolbar>
                </AppBar>
                    <Typography align="center" variant="h4">
                        Burger Constructor
                    </Typography>
                    <BurgerEditor newIngredients={item.ingredients} newAdditives={item.additives} newCost={item.price} />
                <div className={classes.fabContainer}>
                        <Fab className={classes.fab} disabled={!burgerEditorState.ingredients.length} onClick={handleAddToBasket}>
                            <IconAddToBasket/>
                        </Fab>
                </div>
            </Dialog>
        </div>
    );
};

export default withStyles(styles)(BurgerCardModal);