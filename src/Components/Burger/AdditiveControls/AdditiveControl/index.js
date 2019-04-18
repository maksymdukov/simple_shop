import React from 'react';
import {IconButton} from "@material-ui/core";
import IconPlus from '@material-ui/icons/Add';
import IconMinus from '@material-ui/icons/Remove';
import classes from './index.module.css'

const AdditiveControl = ({additiveMenu, additives, addAdditive, removeAdditive, price}) => {
    let jarClasses = [classes.AdditiveControl];
    if (!additives[additiveMenu]) {
        jarClasses.push(classes.blurred);
    }
    return (
        <li className={jarClasses.join(" ")}>
            <div>{additiveMenu}</div>
            <div className={classes.Price}>{price} UAH</div>
            <IconButton disabled={!additives[additiveMenu]} onClick={() => removeAdditive(additiveMenu)}>
                <IconMinus/>
            </IconButton>
            {additives[additiveMenu] ? additives[additiveMenu] : 0}
            <IconButton onClick={() => addAdditive(additiveMenu)}>
                <IconPlus/>
            </IconButton>

        </li>
    );
};

export default AdditiveControl;