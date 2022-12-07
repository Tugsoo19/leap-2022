// function pow(number,exponent) {
//     let multiply = 1;
//     for (let i = 1; i <= exponent; i++){
//         multiply = multiply * number;
//     }
//     return multiply;
// }

// let result = pow(2,3);

// console.log(result);
// console.log(pow(2,4));
// console.log(pow(5,2));

//------------- exercise
//1.

// let a = Number(prompt("A toog oruulna uu"));
// let b = Number(prompt ("B toog oruulna uu"));

// function findMin (a,b) {
//     if (a < b ){
//         return a;
        
//     } else {
//         return b;
       
//     }
// } 
// let min = findMin(a,b)

// console.log(min);

//2.

function printArray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
let myArray = [1,2,3,4,5,80,6];
printArray(myArray);

//3.
console.log("ex3");
let findArrayMax = function (arr) {
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if (max <= arr[i]){
            max = arr[i];
        }
    }
    return max
}

console.log(findArrayMax(myArray));

//4. 
console.log("ex4");

let findAverage = (p) => {
    let sum = 0;
    for(let i = 0; i < p.length; i++){
        sum = sum + p[i]
        
    }
    console.log(p.length)
    console.log(p)
    console.log(sum);
    const average = sum/p.length
    return average
}

console.log(findAverage(myArray));

//5. 

function findOntsDumd(points) {
    if(points < 60) {
        return "Very bad";
    } else if (points >=60 && points < 70){
        return "Satisfied"
    } else if (points >=70 && points < 80){
        return "Satisfied"
    } else if (points >=80 && points < 90){
        return "Satisfied"
    } else if (points >=90 && points <= 100){
        return "Satisfied"
    } else {
        return "please give me points between 0 and 100";
    }
}

let inputPoint = Number(prompt("Give me student point"));
let inputStudentName = prompt("Give me student name");
let pointResult = findOntsDumd(inputPoint);

console.log(`${inputStudentName} - ${inputPoint} - ${pointResult}`)