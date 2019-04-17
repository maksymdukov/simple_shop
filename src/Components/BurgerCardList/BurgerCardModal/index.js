import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import {AppBar, Fab, Toolbar} from "@material-ui/core";
import BurgerEditor from "../../BurgerEditor";
import IconAddToBasket from '@material-ui/icons/AddShoppingCartOutlined';
import IconEdit from '@material-ui/icons/Edit';
import burger from '../../../assets/burger-logo.png';

const styles = (theme) => ({
    fabContainer: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: 10
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
    },
    container: {
        overflow: "auto",
        paddingBottom: 70
    },
    paper: {
        overflow: "auto"
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
                             indexToEdit,
                             error
                         }) => {
    const handleAddToBasket = () => {
        const newItem = {
            name: 'Custom Burger',
            ingredients: burgerEditorState.ingredients,
            additives: burgerEditorState.additives,
            price: burgerEditorState.burgerCost,
            image: burger,
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
            image: "/static/media/burger-logo.png",
            id: Date.now()
        };
        editBasketItem(indexToEdit, newItem);
        handleClose();
    };
    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={opened}
            classes={{paper: classes.paper}}
            onExited={() => initIngredients([], {}, burgerEditorState.error ? 0 : burgerEditorState.menu.prices.initial)}
        >
            <AppBar position="sticky" color="default">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" className={classes.title}>
                        Current cost: <span>{burgerEditorState.burgerCost} UAH</span>
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.container}>
                <Typography align="center" variant="h4">
                    Burger Constructor
                </Typography>
                <BurgerEditor newIngredients={item.ingredients} newAdditives={item.additives} newCost={item.price}/>
                <div className={classes.fabContainer}>
                    {isEditMode
                        ? <Fab className={classes.fab} disabled={!burgerEditorState.ingredients.length || !!burgerEditorState.error}
                               onClick={handleEditBasketItem}>
                            <IconEdit/>
                        </Fab>
                        : <Fab className={classes.fab} disabled={!burgerEditorState.ingredients.length || !!burgerEditorState.error}
                               onClick={handleAddToBasket}>
                            <IconAddToBasket/>
                        </Fab>
                    }
                </div>
            </div>
        </Dialog>
    );
};

export default withStyles(styles)(BurgerCardModal);