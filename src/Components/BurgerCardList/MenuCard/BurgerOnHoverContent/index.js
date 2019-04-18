import React, {Fragment} from 'react';
import {IconButton, Tooltip, withStyles} from "@material-ui/core";
import IconSettings from '@material-ui/icons/Settings';
import ScrollBar from "../../../UI/ScrollBar";
import styles from './styles';

const BurgerOnHoverContent = ({classes, itemObj, onSettingsClick, settingsClass, customizeOff}) => {
    return (
        <div className={classes.container}>
            <div className={classes.fixedControls}>
                {!customizeOff &&
                <Tooltip title="Customize this burger"
                         disableFocusListener
                >
                    <IconButton className={classes.settings} onClick={onSettingsClick}>
                        <IconSettings/>
                    </IconButton>
                </Tooltip>
                }
            </div>
            <ScrollBar>
                <div className={classes.innerContainer}>
                    <p className={classes.title}>Ingredients (top to bottom):</p>
                    <ul>
                        {itemObj.ingredients.map((ing,idx) => <li key={idx}>{ing}</li>)}
                    </ul>
                    {itemObj.additives &&
                    <Fragment>
                        <p className={classes.list}>Sauces:{Object.keys(itemObj.additives).length ? null: " none"}</p>
                        <ul>
                            {Object.entries(itemObj.additives).map((additive,idx) => <li key={idx}>{additive[0]}: x{additive[1]}</li>)}
                        </ul>
                    </Fragment>}
                </div>
            </ScrollBar>
        </div>
    );
};

export default withStyles(styles)(BurgerOnHoverContent);