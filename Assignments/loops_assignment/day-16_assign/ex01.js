//--------------

let num = [1,2,3,4,5,6,7,8];
console.log(num);

for (let i=0; i < num.length; i++ ) {
    if (num[i]% 2 == 0) {
        console.log(num[i]);
    }
}

console.log("old array");
for (let i=0; i < num.length; i++ ) {
    console.log(num[i]); 
}
console.log("new array");

for (let i=0; i < num.length; i++ ) {
    num[i] = num[i] + 1;
    console.log(num[i]); 
}

console.log("new array");

for (let i=0; i < num.length; i++ ) {
    num[i] = num[i] * 10;
    console.log(num[i]); 
}



// ---- assign simple array-1

let itCompanies = ["Facebook", "Google","Microsoft", "Apple", "IBM", "Oracle", "Amazon"];


console.log(itCompanies)

for (let index = 0; index < itCompanies.length; index++) {
    console.log(index + "index number");
    console.log(itCompanies[index]);
    console.log(itCompanies[index].length + "length")
    
}

for (let index =0;index < itCompanies.length; index++ ){
    
}


//1. ugugdsun 2 toonii ihiig oloh function

let num1 = prompt("give me number A"); 
let num2 = prompt("give me number B"); 

function findMax(x,y) {
    if( x < y) {
        console.log(y + "is bigger than" + x);
    } else {
        console.log(x + "is bigger than" + y);;
    }
}
findMax(num1, num2);