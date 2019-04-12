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
import IconEdit from '@material-ui/icons/Edit';

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

const BurgerCardModal = ({
                             classes,
                             handleClose,
                             item,
                             basket,
                             addToBasket,
                             removeFromBasket,
                             opened,
                             addItemToBasket,
                             editBasketItem,
                             burgerEditorState,
                             initIngredients,
                             showNotification,
                             isEditMode,
                             indexToEdit
}) => {
    const handleAddToBasket = () => {
        const newItem = {
            name: 'Custom Burger',
            ingredients: burgerEditorState.ingredients,
            additives: burgerEditorState.additives,
            price: burgerEditorState.burgerCost,
            id: Date.now()
        };
        addItemToBasket(newItem);
        handleClose();
        showNotification(newItem.name);
    };

    const handleEditBasketItem = () => {
        const newItem = {
            name: 'Custom Burger',
            ingredients: burgerEditorState.ingredients,
            additives: burgerEditorState.additives,
            price: burgerEditorState.burgerCost,
            quantity: item.quantity,
            id: Date.now()
        };
        editBasketItem(indexToEdit, newItem);
        handleClose();
    };
    return (
        <div>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={opened}
                onExited={ () => initIngredients([],{}, burgerEditorState.menu.prices.initial) }
            >
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
                    {isEditMode
                        ?   <Fab className={classes.fab} disabled={!burgerEditorState.ingredients.length} onClick={handleEditBasketItem}>
                                <IconEdit/>
                            </Fab>
                        :   <Fab className={classes.fab} disabled={!burgerEditorState.ingredients.length} onClick={handleAddToBasket}>
                                <IconAddToBasket/>
                            </Fab>
                    }
                </div>
            </Dialog>
        </div>
    );
};

export default withStyles(styles)(BurgerCardModal);