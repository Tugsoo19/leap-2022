//---------factorial

let n = prompt("please insert a number");
let result = 1;

for(let i = 1; i <= n; i++) {
    result = result * i;
}
console.log(result);

//------ guess the number

let computernumber = Math.floor(Math.random() * 100)+1;
let count = 0; 
let win = false;

for (let usernumber = 0; usernumber != computernumber && count < 8; count++){
    let usernumber = prompt("Guess the number between 1 to 100");
    if (computernumber == usernumber){
        alert("You won!");
        win = true;
    } else if (computernumber < usernumber) {
        alert("Higher!");
    } else if (computernumber > usernumber){
        alert("Lower!")
    } else {
        alert("Please input a number!")
    }
} 
if (win == true) {
    alert("You won!");
} else if (win == false) {
    alert("Game over");
}
