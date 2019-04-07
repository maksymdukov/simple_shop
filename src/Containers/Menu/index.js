import React from 'react';
import BurgersList from "../../Components/BurgersList";

const Menu = () => {
    return (
        <div>
            <h2>Burgers:</h2>
            <BurgersList/>
            <h2>Beverages:</h2>
            <h2>Deserts:</h2>
        </div>
    );
};

export default Menu;