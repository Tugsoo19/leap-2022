console.log("day14");
console.log("find out even numbers from 1 to 10");

const max = 10;
let start = 1;

while (start <= max) {
    if (start % 2 == 0) {
        console.log(start);
    }
    start = start + 1;
}


console.log("find out odd numbers from 1 to 20");

const max2 = 20;
let start2 = 1;

while (start2 <= max2) {
    if (start2 % 2 != 0) {
        console.log(start2);
    }
    start2 = start2 + 1;
}

console.log("using for loop find out odd numbers from 1 to 20");

for (let start2 = 1; start2 <= max2; start2++) {
    if (start2 % 2 != 0) {
        console.log(start2);
    }
}

/// rest


console.log("textiig doosh useg usgeer hevleh");
let str = "life is beautiful";
console.log(str.length);

let max3 = str.length;
let count = 0;
while (count < max3) {
    console.log(str.charAt(count));
    count = count + 1;
}

//------- for loop -------//
console.log("for loop ashiglaj textiig doosh useg usgeer hevleh");
for (let count = 0; count < max3; count++) {
    console.log(str.charAt(count));
}


