// let a = "hi";
// let b = "hi";
// console.log(a < b);

// console.log(a == b);

// console.log(a === b);

// let c = 10;
// let d = '10';
// console.log(c == d); 
// console.log(c === d);
// console.log(c !== d);

// let e = true;
// let f = false;
// console.log(e < f);
// console.log(e > f);

// let result = 10;
// if (result > 10) {
//     console.log('more than 10');
// } else {
//     console.log('less than 10');
// }

// result > 10 ? console.log('more than 10') : console.log('less than 10');



// if (0n) {
//     console.log('its true');
// } else {
//     console.log("it's false");
// }

// console.log('its log');
// console.error('its error')

// const str = "Life, the universe and everything."
// console.log(str.length);

// console.log(str.charAt(0));
// console.log(str[1]);
// console.log(str.toUpperCase());


//-------- Validate Registration number ------------//

const registerNumber = prompt("Register Number"); 
// console.log(registerNumber.length);
// if (registerNumber.length != 10) {
//     alert ("The Register number length is not correct.")
// } else {
//     alert ("the Register number length is correct.")
// }


console.log(registerNumber.length);
console.log(registerNumber.substr(0,2));
console.log(registerNumber.substr(2,9));

const registerChar = registerNumber.substr(0,2);
const registerNum = registerNumber.substr(2,9);


if (!Number.isInteger(Number(registerChar)) && Number.isInteger(Number(registerNum)) && registerNumber.length == 10) {
    console.log('Your register characters are correct');
    
} else {
    console.log('Your register characters are wrong');
}

console.log(Number('abc'));
console.log(Number.isInteger(Number('abc')))
console.log(Number('12345'));
console.log(Number.isInteger(Number('12345')))


let firstName = "John";
let fullName = firstName.concat(' ','Smith');
console.log(fullName);