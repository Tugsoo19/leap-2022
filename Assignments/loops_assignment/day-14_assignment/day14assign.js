//Ugugdsun toonii tsifruudiin niilberiig oloh//
//string ued//
// let count = 0; 
// let a = prompt("too oruulna uu");
// let sum = 0;

// while (count < a.length){
//     console.log(a.charAt(count));
//     sum = sum + Number(a.charAt(count));
//     count = count + 1;
// }
// console.log(sum);

//number ued

let sumA = 0; 
let rem = 0;
let N = Number(prompt("give me number")); 


while (N >0) {
    rem = N % 10;
    sumA = sumA + rem;
    N = Math.floor(N / 10);
}
console.log(sumA);



for (; N > 0; ) {
    rem = N % 10;
    sumA = sumA + rem;
    N = Math.floor(N / 10);
}
console.log(sumA);



// ---- anhnii toog oloh ----//

// let n = prompt(too oruulna uu);

// let countA = 0; 
// let num = Number(n);

// // for (let Number(n); n % n == 0 && n % 1 == n ; )

// while (num < 100, num % num == 0 && num % 1 == num) {
//     console.log("true");

// }
// console.log("false");
