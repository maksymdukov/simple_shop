import React from 'react';
import MenuCard from "./MenuCard";
import classes from './index.module.css';

const BURGERS = [
    {
        name: "Burger1",
        ingredients: ["salad", "meat", "bacon", "cheese"],
        description: "lorem ipasda asd asd asd",
        image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg"
    },
    {
        name: "Burger2",
        ingredients: ["meat"],
        description: "lorem ipasda asd asd asd",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Smashburger-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494459418304.jpeg"
    },
    {
        name: "Burger3",
        ingredients: ["salad", "meat", "bacon", "cheese"],
        description: "lorem ipasda asd asd asd",
        image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg"
    },
    {
        name: "Burger4",
        ingredients: ["meat"],
        description: "lorem ipasda asd asd asd",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Smashburger-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494459418304.jpeg"
    },
    {
        name: "Burger5",
        ingredients: ["salad", "meat", "bacon", "cheese"],
        description: "lorem ipasda asd asd asd",
        image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg"
    },
    {
        name: "Burger6",
        ingredients: ["meat"],
        description: "lorem ipasda asd asd asd",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Smashburger-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494459418304.jpeg"
    },
    {
        name: "Burger7",
        ingredients: ["meat"],
        description: "lorem ipasda asd asd asd",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Smashburger-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494459418304.jpeg"
    },
    {
        name: "Burger8",
        ingredients: ["meat"],
        description: "lorem ipasda asd asd asd",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Smashburger-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494459418304.jpeg"
    }
];

const BurgersList = ({menuList}) => {
    return (
        <div className={classes.BurgerList}>
            {BURGERS.map( item => <MenuCard key={item.name} itemObj={item}/> )}
        </div>
    );
};

export default BurgersList;