//------- palindromic

let isPalindsome = (prompt("too oruulna uu"));
let cleanStr = String(isPalindsome);
for (let i = 0;i < cleanStr.length /2; i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length -1 -i]) {
        console.log("false");
        break;
    } else  {
        console.log("true");
        break;
    }  
} 

