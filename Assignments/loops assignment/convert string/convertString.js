//-------- convert string

let text = prompt("Write some text");
let result = "";

for (let character of text) {  // variable of iterable
    let value = character.charCodeAt();
        if (value >= 65 && value <= 90) {
            result += String.fromCharCode(value + 32);
        } else if (value >= 97 && value <= 122) {
            result += String.fromCharCode(value - 32);
        } else if (value == 32) {
            result += String.fromCharCode(value);
        }
} console.log(result)