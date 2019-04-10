import React, {useState, Fragment} from 'react';
import {IconButton, Tooltip, withStyles} from "@material-ui/core";
import IconSettings from '@material-ui/icons/Settings';

const styles = theme => ({
    container: {
        padding: 4,
        color: theme.card.backSide.textColor
    },
    settings: {
        flexShrink: 0,
        alignSelf: "flex-start",
        color: theme.card.backSide.textColor
    },
    title: {
        display: "flex",
        justifyContent: "space-between"
    }
});

const BurgerOnHoverContent = ({classes, itemObj, onSettingsClick, settingsClass}) => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <p>Ingredients (top to bottom):</p>
                <Tooltip title="Customize this burger"
                         disableFocusListener
                >
                    <IconButton className={classes.settings} onClick={onSettingsClick}>
                        <IconSettings/>
                    </IconButton>
                </Tooltip>
            </div>
            <ul>
                {itemObj.ingredients.map((ing,idx) => <li key={idx}>{ing}</li>)}
            </ul>
            {itemObj.additives &&
            <Fragment>
                <p>Sauces:</p>
                <ul>
                    {Object.entries(itemObj.additives).map((additive,idx) => <li key={idx}>{additive[0]}: x{additive[1]}</li>)}
                </ul>
            </Fragment>}
        </div>
    );
};

export default withStyles(styles)(BurgerOnHoverContent);