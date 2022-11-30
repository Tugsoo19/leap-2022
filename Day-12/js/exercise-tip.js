// //------------------exercise TIP -----------------------//


// const tip1 = 3000;
// const tip2 = 27500;
// const tip3 = 100000;

// let tipA = (5000 <= tip1 && tip1 <= 30000)? (tip1 + (tip1 * 0.15)) : (tip1 + (tip1 * 0.20));
// let tipB = (5000 <= tip2 && tip2 <= 30000)? (tip2 + (tip2 * 0.15)) : (tip2 + (tip2 * 0.20));
// let tipC = (5000 <= tip3 && tip3 <= 30000)? (tip3 + (tip3 * 0.15)) : (tip3 + (tip3 * 0.20));

// console.log(tipA);
// console.log(tipB);
// console.log(tipC);

// let sum = tipA + tipB + tipC;
// console.log(sum);

// //----------------- Students exam result exercise ----------------------//

// const studentName = prompt('Give me your name');
// const studentPoint = Number(prompt('Give me your score'));


// let studentResult = '0 - 100ийн хооронд оноо байх ёстой';

    
// if (90 <= studentPoint && studentPoint <= 100) {
//     studentResult = ' маш сайн';
// } else if (80 <= studentPoint && studentPoint < 90){
//     studentResult = ' сайн';
// } else if (70 <= studentPoint && studentPoint < 80){
//     studentResult = ' дунд';
// } else if (60 <= studentPoint && studentPoint < 70){
//     studentResult = ' хангалттай';
// } else if (60 > studentPoint){
//     studentResult = ' маш муу';
// }
// else {
//     console.log('buruu');
// }

// alert (studentName + '-' + studentPoint + '-' + studentResult);

// console.log(`${studentName} - `);
// console.log(`${studentName} - ${studentPoint} - ${studentResult}`);



//---------------phone number -------------//
//----------- +97698765435---------------//

const phoneNumber = prompt("Please insert your Phone number"); 

console.log(phoneNumber.length);
console.log(phoneNumber.substr(0,1));
console.log(phoneNumber.substr(1,3));
console.log(phoneNumber.substr(4,8));

const regionCode = phoneNumber.substr(0,1);
const regionNumber = phoneNumber.substr(1,3);
const phoneNum = phoneNumber.substr(4,8);




console.log(typeof regionCode);
console.log(Number.isInteger(Number(regionNumber)));
console.log(Number.isInteger(Number(phoneNum)));;


if (!Number.isInteger(Number(regionCode)) && regionNumber == 976 && Number.isInteger(Number(regionNumber)) && Number.isInteger(Number(phoneNum)) && phoneNumber.length == 12) {
    console.log("та монгол улсын утасны дугаарыг зөв орууллаа");
} else {
    console.log("та монгол улсын утасны дугаарыг буруу орууллаа");
}

