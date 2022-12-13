console.log("events");

let myButton = document.getElementById("myButton");
console.log(myButton);



let color = "green";
function changeColors(){
    console.log("clicked");
    if(color === "green"){
        color = "pink"  
        myButton.style = `background-color: ${color}`
    } else {
        color = "green"; 
        myButton.style = `background-color: ${color}`
    }
}

// myButton.addEventListener("click", changeColors);

let arrowFunc = () => {

}

myButton.addEventListener("click", () => {
    myButton.style = "background-color: red; "
})

let registerButton = document.querySelector(".registerBtn");
console.log(registerButton);
registerButton.disabled = true;