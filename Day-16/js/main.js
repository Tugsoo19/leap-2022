//----------------day 16 

let num = [1,4,5,6,8,10,3,2,10,9,8];
console.log(num)

// for (let i = 0; i < num.length; i++) {
//     if ( num[i]% 2== 0) {
//         num[i] = num[i] + 4; 
//     } else {
//         num[i] = num[i] - 5; 
//     }
// }
// console.log(num)




function isEven(x) {
    // console.log("the number is" + x);
    if( x % 2 == 0){
        // console.log("It is a even number");
        return true;
    } else {
        // console.log("It is an odd number");
        return false
    }

}
console.log(isEven(num[0]));
console.log(isEven(num[1]));

// isEven(5);

// f(x)= x + x

function addTwoNumbers (x,y) {
    return x + y
}
console.log(addTwoNumbers(4,5))

function multiplyTwoNumbers (x,y) {
    return x * y
}

console.log(multiplyTwoNumbers(4,7));

function multiplyThreeNumbers (x , y , z) {
    const m = x * y * z;
    return m;
}
const result = multiplyThreeNumbers(4,5,6)
console.log(result)


for (let i = 0; i < num.length; i++) {
    if ( isEven(num[i])) {
        num[i] = num[i] + 4; 
    } else {
        num[i] = num[i] - 5; 
    }
}
console.log(num);

console.log(Math.sqrt(4));