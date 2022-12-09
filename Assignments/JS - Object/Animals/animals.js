
//

function howDoesTheFoxSay(array, animalType) {
    for(let i= 0; i< array.length; i++){
        if (array[i].type == animalType){
            console.log(`${array[i].sound} - ${array[i].sound} - ${array[i].sound}`);
        }
        
    }
}

let animals = [
    { 
        type: "dog", 
        sound: "woof" },
    { 
        type: "cow", 
        sound: "moo" }, 
    { 
        type: "cat", 
        sound: "meow" }
]

console.log('Dog barking');
howDoesTheFoxSay(animals,'dog'); // woof-woof-woof
console.log('Cow mooing');
howDoesTheFoxSay(animals,'cow'); // moo- moo-moo
console.log('Cat meowing');
howDoesTheFoxSay(animals,'cat'); // meow-meow-meow


