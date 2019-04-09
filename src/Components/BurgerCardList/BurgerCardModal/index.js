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
import {DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import BurgerEditor from "../../BurgerEditor";

const BurgerCardModal = ({handleClose, item, basket, addToBasket, removeFromBasket, opened}) => {
    return (
        <div>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={opened}
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
                <BurgerEditor newIngredients={item.ingredients} newAdditives={item.additives} newCost={item.price} />
            </Dialog>
        </div>
    );
};

export default BurgerCardModal;