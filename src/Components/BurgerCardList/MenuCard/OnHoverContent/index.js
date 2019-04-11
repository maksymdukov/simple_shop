import React from 'react';
import {withStyles} from "@material-ui/core";
import ScrollBar from "../../../UI/ScrollBar";

const styles = theme => ({
    container: {
        padding: 4,
        color: theme.card.backSide.textColor
    },
    settings: {
        flexShrink: 0,
        alignSelf: "flex-start"
    },
    title: {
        display: "flex",
        justifyContent: "space-between"
    },
    description: {
        '&:first-letter': {
            textTransform: "capitalize"
        }
    }
});

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