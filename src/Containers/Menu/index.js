import React from 'react';
import MenuCardList from "../../Components/MenuCardList";
import {BURGERS} from "../../Components/MenuCardList/menuMock";



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