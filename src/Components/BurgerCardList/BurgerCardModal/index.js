import React from "react";
import PropTypes from "prop-types";

// MUI
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Fab, Toolbar, Dialog, Typography } from "@material-ui/core";

// Local components
import BurgerEditor from "../../BurgerEditor";

// Icons
import IconAddToBasket from "@material-ui/icons/AddShoppingCartOutlined";
import IconEdit from "@material-ui/icons/Edit";

// Styles
import styles from "./styles";

// Constants
import { BASENAME } from "../../../index";

const BurgerCardModal = ({
    classes,
    handleClose,
    item,
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
            name: "Custom Burger",
            ingredients: burgerEditorState.ingredients,
            additives: burgerEditorState.additives,
            price: burgerEditorState.burgerCost,
            image: `${BASENAME}/static/media/burger-logo.png`,
            id: Date.now()
        };
        addItemToBasket(newItem);
        handleClose();
        showNotification(newItem.name);
    };

    const handleEditBasketItem = () => {
        const newItem = {
            name: "Custom Burger",
            ingredients: burgerEditorState.ingredients,
            additives: burgerEditorState.additives,
            price: burgerEditorState.burgerCost,
            quantity: item.quantity,
            image: `${BASENAME}/static/media/burger-logo.png`,
            id: Date.now()
        };
        editBasketItem(indexToEdit, newItem);
        handleClose();
    };

    const onDialogExit = () => {
        initIngredients(
            [],
            {},
            burgerEditorState.error ? 0 : burgerEditorState.menu.prices.initial
        );
    };
    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={opened}
            fullWidth
            classes={{ paper: classes.paper }}
            onExited={onDialogExit}
        >
            <AppBar position="sticky" color="default">
                <Toolbar className={classes.toolbar}>
                    <Typography
                        variant="h6"
                        color="inherit"
                        className={classes.title}
                    >
                        Current cost:{" "}
                        <span>{burgerEditorState.burgerCost} UAH</span>
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.container}>
                <Typography align="center" variant="h4">
                    Burger Constructor
                </Typography>
                <BurgerEditor
                    newIngredients={item.ingredients}
                    newAdditives={item.additives}
                    newCost={item.price}
                />
                <div className={classes.fabContainer}>
                    {isEditMode ? (
                        <Fab
                            className={classes.fab}
                            disabled={
                                !burgerEditorState.ingredients.length ||
                                !!burgerEditorState.error
                            }
                            onClick={handleEditBasketItem}
                        >
                            <IconEdit />
                        </Fab>
                    ) : (
                        <Fab
                            className={classes.fab}
                            disabled={
                                !burgerEditorState.ingredients.length ||
                                !!burgerEditorState.error
                            }
                            onClick={handleAddToBasket}
                        >
                            <IconAddToBasket />
                        </Fab>
                    )}
                </div>
            </div>
        </Dialog>
    );
};

BurgerCardModal.defaultProps = {
    editBasketItem: () => {},
    isEditMode: false,
};

BurgerCardModal.propTypes = {
    classes: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    opened: PropTypes.bool.isRequired,
    addItemToBasket: PropTypes.func,
    editBasketItem: PropTypes.func.isRequired,
    burgerEditorState: PropTypes.object.isRequired,
    initIngredients: PropTypes.func.isRequired,
    showNotification: PropTypes.func,
    isEditMode: PropTypes.bool,
    indexToEdit: PropTypes.number
};

export default withStyles(styles)(BurgerCardModal);
