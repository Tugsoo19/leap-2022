// day-13 

// console.log(Math.PI);
// console.log(Math.PI.toFixed(2));

// const budget = 1_000_000_000;
// console.log(budget);

// const degrees = 45;
// let rad = degrees * (Math.PI / 180);
// console.log(rad.toFixed(4));

// let a = 5, b = 9;
// const diff = Math.abs(a - b);
// console.log(diff);

// console.log(Math.ceil(.95));
// // output: 1
// console.log(Math.ceil(4));
// // output: 4
// console.log(Math.ceil(7.004));
// // output: 8
// console.log(Math.ceil(-7.004));
// // output: -7

// console.log(Math.floor(5.95));
// // output: 5
// console.log(Math.floor(5.05));
// // output: 5
// console.log(Math.floor(5));
// // output: 5

// console.log(Math.floor(-5.05));
// // output: -6

// console.log(Math.round(0.9));
// // output: 1
// console.log(Math.round(5.95), Math.round(5.4), Math.round(5.8))
// // output: 6 6 5
// console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-6.9))
// // output: -5 -5 -6

// console.log(Math.pow(7, 3));

// ---------

// let y = Number(prompt("give me y"));
// let z = Number(prompt("giv me z"));
// console.log(y,z);

// let x = Math.sqrt(Math.pow(y,2)+(Math.pow(z,2)));
// console.log(x);

console.log(Math.ceil(Math.random() * 6))

//-------------exercise-------//

console.log(Math.ceil(Math.random() * 100));

//---------random number between----------//

let c = Number(prompt("give me c"));
let d = Number(prompt("giv me d"));

let max = Math.max(c,d); 
let min = Math.min(c,d);

let countA = min;
console.log("loop start");
while (countA<= max) {
    console.log(Math.floor(Math.random() * (max - min) + min))
    countA = countA + 1;
}
console.log("loop ended")

// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));


//------------numbers-sum -------------//

// let value = (prompt("give me a number"));
// console.log(value.length);

// if (value.length == 3) {
//     console.log(value.charAt(0))
//     console.log(value.charAt(1))
//     console.log(value.charAt(2))
//     let val1 = Number(value.charAt(0));
//     let val2 = Number(value.charAt(1));
//     let val3 = Number(value.charAt(2));
//     let sum = (val1) + (val2) + (val3);
//     console.log(sum);
// } else {
//     alert("3 orontoi too oruulna uu")
// }


//---------------

// let count = 1;
// console.log("loop start");
// while (count<= 10) {
//     console.log(count);
//     count = count + 1;
// }
// console.log("loop ended")