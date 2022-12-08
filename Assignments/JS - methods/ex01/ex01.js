// ex01 - JS methods

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat');
}
console.log(shoppingCart);

if ( !shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar');
}
console.log(shoppingCart);


if (shoppingCart.includes('Honey')){
    let index = shoppingCart.indexOf('Honey')
    shoppingCart.splice(index,1)
}
console.log(shoppingCart); 


if (shoppingCart.includes('Tea')){
    let index = shoppingCart.indexOf("Tea");
    shoppingCart.splice(index,1,'Green Tea')
}
console.log(shoppingCart); 
