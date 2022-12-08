console.log('lesson Objects');

let rabbit1 = {
    color: 'White',
    rName: 'Bunny',
    gender: 'male',
    age: 3,
    jump: function(){
        console.log("Sorry, I broke my leg. I can't jump");
    },
    sayMyName: function(myName){
        console.log(`Your name is ${myName}`);
    }
    
}

console.log(rabbit1);
console.log((rabbit1.color));
rabbit1.color = 'Gray'
console.log(rabbit1);
rabbit1.jump()
rabbit1.sayMyName("Tugsoo")


let rabbit2 = {
    color: 'Brown',
    rName: 'Flower',
    gender: 'Female',
    age: 2,
    jump: function(){
        console.log("I can jump");
    }
}

console.log("Here is rabbit 2 speaks");
console.log(rabbit2);


let rabbits = [rabbit1,rabbit2]
console.log(rabbits);
rabbit2.jump()
