import React from 'react';
import MenuCardList from "../../Components/BurgerCardList";
import {BURGERS, BEVERAGES} from "./menuMock";



const Menu = () => {
    return (
        <div>
            <h2>Burgers:</h2>
            <MenuCardList list={BURGERS} type='burger'/>
            <h2>Beverages:</h2>
            <MenuCardList list={BEVERAGES} type='normal'/>
            <h2>Deserts:</h2>
        </div>
    );
};

export default Menu;