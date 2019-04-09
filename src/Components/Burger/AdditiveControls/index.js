import React from 'react';
import {List} from "@material-ui/core";
import AdditiveControl from "./AdditiveControl";
import classes from './index.module.css';

const AdditiveControls = ({additivesMenu, additives, addAdditive, removeAdditive}) => {
        let additivesControls;
        additivesControls = additivesMenu.map( additiveMenu => (
            <AdditiveControl key={additiveMenu} {...{additiveMenu, additives, addAdditive, removeAdditive}}/>
        ) );
    return (
        <ul className={classes.AdditiveControls}>
            {additivesControls}
        </ul>
    );
};

export default AdditiveControls;