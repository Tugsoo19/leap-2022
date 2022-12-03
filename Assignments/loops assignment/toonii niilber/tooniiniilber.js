//------------ toonii niilber -----------//

let max = Number(prompt("give a number")); 
console.log(max);

let sum = 0;
let count = 1;
console.log("loop start");

while (count <= max) {
    
    sum = sum + count;
    count = count + 1;  
}
console.log(sum);
console.log("loop ended")


//----------number digits

let n = Number(prompt("give me your number"));
let countA = 0; 
console.log(n);


if (Number.isInteger(n)) {
    while (n !== 0) {
        countA = countA + 1; 
        n = Math.floor(n/10);
    }
    console.log(countA)
} else {
    alert ("Please insert only number");
}

