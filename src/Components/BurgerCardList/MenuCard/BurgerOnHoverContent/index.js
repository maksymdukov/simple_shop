import React, {useState, Fragment} from 'react';
import {IconButton, Tooltip, withStyles} from "@material-ui/core";
import IconSettings from '@material-ui/icons/Settings';
import ScrollBar from "../../../UI/ScrollBar";


const styles = theme => ({
    container: {
        color: theme.card.backSide.textColorSecondary,
        position: "relative",
        height: "100%"
    },
    settings: {
        color: theme.card.backSide.textColor
    },
    fixedControls: {
        zIndex: 10,
        position: "absolute",
        top: 0,
        right: 10,
    },
    title: {
        marginTop: 0
    },
    list: {
    },
    innerContainer: {
        padding: "8px"
    }
});

const BurgerOnHoverContent = ({classes, itemObj, onSettingsClick, settingsClass}) => {
    return (
        <div className={classes.container}>
            <div className={classes.fixedControls}>
                <Tooltip title="Customize this burger"
                         disableFocusListener
                >
                    <IconButton className={classes.settings} onClick={onSettingsClick}>
                        <IconSettings/>
                    </IconButton>
                </Tooltip>
            </div>
            <ScrollBar>
                <div className={classes.innerContainer}>
                    <p className={classes.title}>Ingredients (top to bottom):</p>
                    <ul>
                        {itemObj.ingredients.map((ing,idx) => <li key={idx}>{ing}</li>)}
                    </ul>
                    {itemObj.additives &&
                    <Fragment>
                        <p className={classes.list}>Sauces:</p>
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