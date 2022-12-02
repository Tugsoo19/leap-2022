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