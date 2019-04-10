import React from 'react';
import MenuCardList from "../../Components/BurgerCardList";
import {BURGERS, BEVERAGES} from "./menuMock";
import {Typography} from "@material-ui/core";
import Heading from "../../Components/UI/Heading";
import HeadingDivider from "../../Components/UI/HeadingDivider";



const Menu = () => {
    return (
        <div>
            <Heading variant="h4" color="primary" component="h2">Burgers</Heading>
            <HeadingDivider/>
            <MenuCardList list={BURGERS} type='burger'/>
            <Heading variant="h4" color="primary" component="h2">Beverages</Heading>
            <HeadingDivider/>
            <MenuCardList list={BEVERAGES} type='normal'/>
            <Heading variant="h4" color="primary" component="h2">Deserts</Heading>
            <HeadingDivider/>
        </div>
    );
};

export default Menu;