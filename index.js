// global scope 
const burgers = ['Hamburger','Cheeseburger'];
let featuredDrink = "Strawberry Milkshake";

function addBurger () {
    const newBurger = 'Flatburger';
    burgers.push(newBurger)
}
    // newBurger = 'Flatburger'
    // burgers.push(newBurger);
    // console.log(burgers);

// addBurger('Flatburger');
// burgers.push('FlatBurger')
// console.log(burgers);

 if(true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
}

function changeFeaturedDrink(drinkName) {
    featuredDrink = drinkName;
}
