import React from 'react';
import Card from "./Card";

const CardList = ({basket}) => {
    return basket.map(basketItem => <Card key={basketItem.name} {...{basketItem}} />);
};

export default CardList;