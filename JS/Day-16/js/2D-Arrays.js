//------------------- Battleship Game

/** 
 * Example-1: 
 * 
 * |x|x|0|0|0|x|x|
 * |x|x|0|0|0|x|x|
 * |x|x|0|0|0|x|x|
 * |x|x|0|0|0|x|x|
 * |x|x|0|0|0|x|x|
 * |x|x|0|0|0|x|x|
 * 
 * 
 * 
 * Example - 2: Tic tac toe
 * |col1|col2|col3|
 * | x  |  o |  x | => row1
 * | o  |  o |  x | => row2
 * | x  |  x |  o | => row3
*/

let row1 = ['x','o', 'x'];
let row2 = ['o','o', 'x'];
let row3 = ['x','x', '0'];
console.log(row1);
console.log(row2);
console.log(row3);

let tictactoe = 
[
    ['x','o', 'x'],
    ['o','o', 'x'],
    ['x','x', '0']
];
console.log(tictactoe);
console.log(tictactoe[1]);
console.log(tictactoe[1][1]);
tictactoe[0][1] = 'x';

//input -eer tuhain tictactoe-iin column-ii bolood row-iin index-iig daraalluulj avaad 3dah udaad yugaar solihiig ugnu

let input1 = Number(prompt("Insert your row number"))
let input2 = Number(prompt("insert your column number"));
let value = prompt("insert your value");


tictactoe[input1][input2] = value;

console.log("for loop with for loop")
// tictactoe -iin buh murnii elementuudiig hevlej haruulna uu

for (let i = 0; i < tictactoe.length; i++){
    let output = ''
    for( let j = 0; j < tictactoe[i].length; j++){
        output = output + "| " + tictactoe[i][j] + " |" 
    }
    console.log(output)
}

