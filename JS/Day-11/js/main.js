let myDecision = true;
console.log(myDecision);
console.log(typeof myDecision)


let x = 2;
let y = 3;
let z = 4;
let e = 240;
let f = 175;


alert((x * x) + (y * y) - (z * z * z) / e * f);

console.log(7 % 2);
console.log(36 % 19);

let resultA = '30' + 10;
console.log(resultA);

// ------------- toirgiin urt oloh -------------- // 

const pi = 3.14;
let r = 7;
console.log(2 * pi * r);
// alert (2 * pi * r);

// ------------ Trapezoid --------- // 

let c = 2;
let d = 3;
let h = 4;
console.log((c + d) / 2 * h)

alert((c + d) / 2 * h);

let bottom = prompt('Please give me your bottom size!');
let topsize = prompt('plese give me your top size!');
let heightA = prompt('please give me your height');
let trapezoidArea = ((bottom + topsize) / 2 * heightA);
alert(trapezoidArea);


let a = prompt('give me a value');
let b = prompt('give me b value');

if (a <= b) {
    console.log("It's true");

} else {
    console.log("It's false");
}


// exercise1 
// ----- easy-8 -------// 

const yearofBirth = prompt('Year of Birth');
const currentYear = 2022;
const old = (currentYear - yearofBirth);

if (0 <= old && old <= 1) {
    console.log("Infant");
}
else if (1 < old && old <= 3) {
    console.log("Toddler");
}
else if (3 < old && old <= 5) {
    console.log("Preschool");
}
else if (5 < old && old <= 12) {
    console.log("Gradeschooler");
}
else if (12 < old && old <= 18) {
    console.log("Teen");
}
else if (18 < old && old <= 21) {
    console.log("Young adult");
}
else {
    console.log("Adult");
}


// ----- easy-6 -------// 

const numberA = prompt("Please insert your number");
if (numberA % 2 == 0) {
    console.log("It's even number")
}
else {
    console.log("It's odd number")
}


// ----- easy-3 -----//

const number = prompt("please insert your number");
if (number % 3 == 0 || number % 7 == 0) {
    console.log("huvaagdana");
}
else {
    console.log("huvaagdahgui");
}

// ----- easy-5 bmi ------//

const weight = prompt("please insert your weight by kg");
const height = prompt("please insert your height by cm");

let bmi = (weight / ((height / 100) * (height / 100)));
console.log(bmi);

if (bmi < 18.5) {
    console.log("Under weight")
}
else if (18.5 <= bmi && bmi <= 24.9) {
    console.log("Normal");
}
else if (25 <= bmi && bmi <= 29.9) {
    console.log("Over Weight");
}
else if (30 <= bmi && bmi <= 34.9) {
    console.log("Obesity class I");
}
else if (35 <= bmi && bmi <= 39.9) {
    console.log("Obesity class II");
}
else {
    console.log("Extreme Obesity");
}

// switch example 

let day = prompt("Please insert day number");
let dayNumber = Number(day);
console.log(dayNumber);
console.log(typeof (dayNumber))

let dayName;

switch (dayNumber) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;

    default:
        dayName = 'Invalid day'

}
console.log(dayName);

//---------- easy-4 && 7 -------------//

let n = prompt("Please insert day number");

if (n > 0) {
    console.log('positive');
}
else {
    console.log('negative');
}


// ----------------- easy-1 -----------------// 

let score = prompt("Please insert grade");
let grade = Number(score);
console.log(grade);

if (90 <= grade && grade <= 100) {
    console.log("A")
}
else if (80 <= grade && grade <= 89.9) {
    console.log("B");
}
else if (70 <= grade && grade <= 79.9) {
    console.log("C");
}
else if (60 <= grade && grade <= 69.9) {
    console.log("D");
}
else {
    console.log("F");
}


//---------- easy-2 -----------//

let month = prompt("Please insert month");
let monthNumber = Number(month);
console.log(monthNumber);
console.log(typeof (monthNumber))

let result = monthNumber % 2

if (1 <= monthNumber && monthNumber < 8 && monthNumber != 2) {
    switch (result) {
        case 0:
            console.log("30");
            break;
        default:
            console.log("31");
    }
}
else if (9 <= monthNumber && monthNumber <= 12) {
    switch (result) {
        case 0:
            console.log("31");
            break;
        default:
            console.log("30");
    }
}
else if (monthNumber == 8) {
    console.log("31");
}

else if (monthNumber == 2) {
    console.log("29");
}

//-------------------------------------------//








