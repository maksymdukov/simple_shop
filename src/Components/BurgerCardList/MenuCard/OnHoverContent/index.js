import React from 'react';
import {withStyles} from "@material-ui/core";
import ScrollBar from "../../../UI/ScrollBar";
import styles from './styles'

const OnHoverContent = ({classes, itemObj}) => {
    return (
        <ScrollBar>
            <div className={classes.container}>
                    <p className={classes.description}>{itemObj.description}</p>
            </div>
        </ScrollBar>
    );
};

export default withStyles(styles)(OnHoverContent);