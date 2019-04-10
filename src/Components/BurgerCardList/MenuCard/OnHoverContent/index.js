import React from 'react';
import {withStyles} from "@material-ui/core";

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
    },
    description: {
        '&:first-letter': {
            textTransform: "capitalize"
        }
    }
});

const OnHoverContent = ({classes, itemObj}) => {
    return (
        <div className={classes.container}>
                <p className={classes.description}>{itemObj.description}</p>
        </div>
    );
};

export default withStyles(styles)(OnHoverContent);