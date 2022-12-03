//prime number

let n = prompt("give me number");
console.log(n);
let isPrime = 0;
let max = 100;

if (1<= n && n<=100) {
    for (let i = 2; i < n; i++) {
        if( n % i == 0) {
            isPrime = 1;
            break;
        }
    } 
    if (isPrime == 0) {
        console.log("The number is prime");
    } else {
        console.log("This number is not prime");
    }
} else {
    alert("please insert a numbet between 1 to 100")
}



