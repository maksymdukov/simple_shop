const BURGERS = [
    {
        name: "Chilly Master Burger",
        ingredients: ["salad", "meat", "bacon", "cheese"],
        description: "lorem ipasda asd asd asd",
        image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg",
        price: 50,
        additives: {
            'chilly sauce': 1
        }
    },
    {
        name: "MeatBall Burger",
        ingredients: ["meat", "meat", "cheese"],
        description: "lorem ipasda asd asd asd",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Smashburger-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494459418304.jpeg",
        price: 60,
        additives: {
            'bbq sauce': 1
        }
    },
    {
        name: "Vegan Burger",
        ingredients: ["salad", "cheese", "salad", "cheese"],
        description: "lorem ipasda asd asd asd",
        image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg",
        price: 70,
        additives: {
            'cheese sauce': 1
        }
    },
    {
        name: "Standard Burger",
        ingredients: ["meat", "bacon"],
        description: "lorem ipasda asd asd asd",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Smashburger-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494459418304.jpeg",
        price: 80,
        additives: {
            'bbq sauce': 1
        }
    },
    {
        name: "Meat King Burger",
        ingredients: ["meat", "meat", "bacon"],
        description: "lorem ipasda asd asd asd",
        image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg",
        price: 90,
        additives: {
            'bbq sauce': 2,
            'cesar sauce': 1
        }
    },
    {
        name: "Bacon worrier Burger",
        ingredients: ["bacon", "cheese", "bacon", "salad"],
        description: "lorem ipasda asd asd asd",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Smashburger-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494459418304.jpeg",
        price: 100,
        additives: {
            'chilly sauce': 2,
        }

    },
    {
        name: "CheeseBurger",
        ingredients: ["cheese", "meat", "cheese"],
        description: "lorem ipasda asd asd asd",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Smashburger-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494459418304.jpeg",
        price: 95
    },
    {
        name: "BurgerSpring",
        ingredients: ["salad", "meat", "salad", "cheese"],
        description: "lorem ipasda asd asd asd",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Smashburger-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494459418304.jpeg",
        price: 122
    }
];

const BEVERAGES = [
    {
        name: "Pepsi 0,33",
        description: "lorem ipasda asd asd asd",
        image: "http://www.burgerpoint.eu/images/pepsi%20ken%202.jpg",
        price: 10,
    },
    {
        name: "Pepsi",
        description: "lorem ipasda asd asd asd",
        image: "https://verysmachno.com/wp-content/uploads/2018/11/Pepsi_05L_Blue-1.jpg",
        price: 20,
    },
    {
        name: "Borjomi",
        description: "lorem ipasda asd asd asd",
        image: "https://okwine.ua/components/com_jshopping/files/img_products/full_mineralnaya-voda-borzhomi-zh-b-gaz-0-33l.jpg",
        price: 40,
    },
];

const burgerBuilder = {
    mainIngredients: ['chicken', 'meat', 'bacon', 'cheese', 'salad', 'cucumber', 'tomato', 'onion'],
    additives: ['chilly sauce', 'cesar sauce', 'bbq sauce', 'cheese sauce'],
    prices: {
        initial: 40,
        salad: 10,
        chicken: 25,
        meat: 30,
        bacon: 50,
        cheese: 10,
        cucumber: 3,
        tomato: 5,
        onion: 3,
        'chilly sauce': 10,
        'cesar sauce': 12,
        'bbq sauce': 8,
        'cheese sauce': 11
    }
};

console.log(JSON.stringify(burgerBuilder));