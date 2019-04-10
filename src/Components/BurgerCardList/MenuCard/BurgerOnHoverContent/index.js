import React, {useState} from 'react';
import {IconButton, Tooltip, withStyles} from "@material-ui/core";
import IconSettings from '@material-ui/icons/Settings';

const styles = theme => ({
    container: {
        padding: 4
    },
    settings: {
        flexShrink: 0,
        alignSelf: "flex-start"
    },
    title: {
        display: "flex",
        justifyContent: "space-between"
    }
});

const BurgerOnHoverContent = ({classes, itemObj, onSettingsClick}) => {
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
        </div>
    );
};

export default withStyles(styles)(BurgerOnHoverContent);