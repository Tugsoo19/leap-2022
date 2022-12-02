let n = prompt("too oruulna uu"); 
console.log(n, n.length); 

let max = n.length;
let count = 1

while(count <= max) {
    max = max - 1; 
    console.log(n.charAt(max));
    
}