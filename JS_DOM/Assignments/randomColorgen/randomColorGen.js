// random color generator

let button = document.querySelector("#generator");
let body = document.querySelector("body");
let color = "white";
button.addEventListener("click", () => {
    if(color == "white"){
        color = "green";
        body.style = "background-color: lightblue"
        button.style = "color: red";
    } else if(color == "green"){
        color = "red";
        body.style = "background-color: red";
        button.style = "color: lightblue";
    } else if(color == "red"){
        color = "lightblue";
        body.style = "background-color: green";
        button.style = "color: pink";
    } else if(color == "lightblue"){
        color = "pink";
        body.style = "background-color: orange";
        button.style = "color: yellow";
    } else if(color == "pink"){
        color = "yellow";
        body.style = "background-color: yellow";
        button.style = "color: salmon";
    }  else if(color == "yellow"){
        color = "white";
        body.style = "background-color: lightgreen";
        button.style = "color: gold";
    }
});