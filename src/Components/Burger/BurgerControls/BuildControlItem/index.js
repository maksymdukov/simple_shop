import React from 'react';
import {IconButton} from "@material-ui/core";
import IconPlus from "@material-ui/icons/Add"
import classes from './index.module.css'

const BuildControlItem = ({name, handlePlusIng}) => {
    let ingClass = [classes.BuildControlItem];
    switch (name) {
        case 'meat':
            ingClass.push(classes.Meat);
            break;
        case 'bacon':
            ingClass.push(classes.Bacon);
            break;
        case 'cheese':
            ingClass.push(classes.Cheese);
            break;
        case 'salad':
            ingClass.push(classes.Salad);
            break;
        default:
            break;
    }
    return (
        <li className={ingClass.join(' ')}>
            <IconButton onClick={handlePlusIng}>
                <IconPlus/>
            </IconButton>
            <div>{name}</div>
        </li>
    );

    // return (
    //         <IconButton onClick={handlePlusIng} className={ingClass.join(' ')}>
    //             <div>
    //                 <IconPlus/>
    //                 <div className={classes.Name}>{name}</div>
    //             </div>
    //         </IconButton>
    //
    // );
};

export default BuildControlItem;