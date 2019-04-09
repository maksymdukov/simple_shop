import React from 'react';
import MenuCardList from "../../Components/BurgerCardList";
import {BURGERS} from "../../Components/BurgerCardList/menuMock";



const Menu = () => {
    return (
        <div>
            <h2>Burgers:</h2>
            <MenuCardList list={BURGERS}/>
            <h2>Beverages:</h2>
            <h2>Deserts:</h2>
        </div>
    );
};

export default Menu;