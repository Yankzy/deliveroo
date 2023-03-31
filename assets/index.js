export const restaurants = [
    {
        name: 'KFC',
        image: require('./images/kfc1.png'),
        category: 'Fast Food',
        description: 'Fast food restaurant chain specializing in fried chicken, with sides such as mashed potatoes and coleslaw. Known for its secret recipe and "finger-licking" slogan.',
        delivery_time: '30',
        delivery_fee: '5',
        distance: '1.5',
        reviews: '123',
        long: 20,
        lat: 49,
        address: 'KFC, 1st Floor',
        rating: 4.5,
        featuredCategory: ['Featured', 'Offers Near You'],   
        dishes: [
            {
                name: 'Big Spicy Chicken Wrap',
                image: require('./images/BigSpicyChickenWrap.png'),
                price: 15,
                description: 'Big Spicy Chicken Wrap',
                rating: 4.5,
            },
            {
                name: 'McSpicy Chicken',
                image: require('./images/McSpicyChicken.png'),
                price: 15,
                description: 'McSpicy Chicken',
                rating: 4.5,
            },
        ],
    },
    {
        name: 'McDonalds',
        image: require('./images/mcdo.png'),
        category: 'Fast Food',
        description: "Fast food restaurant chain known for its burgers, fries, and shakes. Offers value meals and kid-friendly options. Has locations worldwide.",
        delivery_time: '30',
        delivery_fee: '5',
        distance: '1.5',
        reviews: '123',
        long: 20,
        lat: 49,
        address: 'McDO building, 1st Floor',
        rating: 4.5,
        featuredCategory: ['Featured', 'Tasty Discounts'],  
        menus:{
          "SPICY DELIGHTS": [
                {
                    name: 'Big Spicy Chicken Wrap',
                    image: require('./images/BigSpicyChickenWrap.png'),
                    price: 15,
                    description: 'Big Spicy Chicken Wrap',
                    rating: 4.5,
                },
                {
                    name: 'McSpicy Chicken',
                    image: require('./images/McSpicyChicken.png'),
                    price: 15,
                    description: 'McSpicy Chicken',
                    rating: 4.5,
                },
            ],
            "VALUE MEALS": [
                {
                    name: 'McCHICKEN MEAL',
                    image: require('./images/McChickenMeal.png'),
                    price: 15,
                    description: 'Includes McChicken + medium fries + medium Coke (Gratify your hunger with a combo of McChicken Burger, crispy fries and a medium sized Coke)',
                    rating: 4.5,
                },
                {
                    name: 'CHICKEN McNUGGETS MEAL',
                    image: require('./images/ChickenMCNuggetsMeal.png'),
                    price: 15,
                    description: 'ncludes Chicken McNuggets + medium fries + medium Coke (A snack full of chunky and delightful Chicken McNuggets. Dolloping your appetite includes Crispy fries and Medium Coke.)',
                    rating: 4.5,
                },
            ],

        },
        dishes: [
            {
                name: 'Big Spicy Chicken Wrap',
                image: require('./images/BigSpicyChickenWrap.png'),
                price: 15,
                description: 'Big Spicy Chicken Wrap',
                rating: 4.5,

            },
            {
                name: 'McSpicy Chicken',
                image: require('./images/McSpicyChicken.png'),
                price: 15,
                description: 'McSpicy Chicken',
                rating: 4.5,
            },
        ],
    },
    {
        name: 'Madina',
        image: require('./images/maroc.png'),
        category: 'Moroccan',
        description: 'Moroccan restaurant with traditional decor and menu featuring dishes such as tagine and couscous. Offers vegetarian and halal options. Located in major cities worldwide',
        address: 'Blvd Mohammed V.',
        delivery_time: '30',
        delivery_fee: '5',
        distance: '1.5',
        reviews: '123',
        long: 20,
        lat: 49,
        rating: 4.5,
        featuredCategory: ['Featured', 'Tasty Discounts', 'Offers Near You'],   
        dishes: [
            {
                name: 'tagine',
                image: require('./images/tagine.png'),
                price: 15,
                description: 'Lamb tagine',
                rating: 4.5,
            },
            {
                name: 'taginekefta',
                image: require('./images/taginekefta.png'),
                price: 15,
                description: 'Ground beef tagine',
                rating: 4.5,
            },
        ],
    },
]

export const featureCategories = [
    {
      title: 'Featured',
      description: 'Paid Partnerships',
    },
    {
      title: 'Recommended',
      description: 'Recommended for you',
    },
    {
      title: 'Tasty Discounts',
      description: 'Everyday Discounts',
    },
    {
      title: 'Offers Near You',
      description: 'Best offers near you',
    },
    {
      title: 'New Restaurants',
      description: 'Newly opened restaurants',
    },
    {
      title: 'Top Rated',
      description: 'Top rated restaurants',
    },
    {
      title: 'Trending',
      description: 'Trending restaurants',
    },
  ];

export const categories = [
  {bg: "#1e3a8a", title: 'Grocery', image: require('./images/grocery.png')},
  {bg: "#6366f1", title: 'Offers', image: require('./images/offers.png')},
  {bg: "#7dd3fc", title: 'Breakfast', image: require('./images/breakfast.png')},
  {bg: "#581c87", title: 'Fast Food', image: require('./images/fastfood.png')},
  {bg: "#14b8a6", title: 'Moroccan', image: require('./images/moroccan.png')},
  {bg: "#3f6212", title: 'Pizza', image: require('./images/pizza.png')},
  {bg: "#22d3ee", title: 'Dessert', image: require('./images/dessert.png')},
  {bg: "#0d9488", title: 'Healthy', image: require('./images/healthy.png')},
  {bg: "#0ea5e9", title: 'Burger', image: require('./images/burger.png')},
  {bg: "#db2777", title: 'Chicken', image: require('./images/chicken.png')},
  {bg: "#7c3aed", title: 'Italian', image: require('./images/italian.png')},
  {bg: "#60a5fa", title: 'Asian', image: require('./images/asian.png')},
  {bg: "#a21caf", title: 'Vegetarian', image: require('./images/vegetarian.png')},
  {bg: "#99f6e4", title: 'Seafood', image: require('./images/seafood.png')},
  {bg: "#93c5fd", title: 'Vegan', image: require('./images/vegan.png')},
];
  
    
