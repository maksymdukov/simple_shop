import React, {Component} from 'react';
import classes from './index.module.css';
import burgerLogo from '../../../assets/burger-logo.png';

class Logo extends Component {
    render() {
        return (
            <div className={classes.Logo}>
                <img src={burgerLogo} alt="Logo"/>
            </div>
        );
    }
}

export default Logo;