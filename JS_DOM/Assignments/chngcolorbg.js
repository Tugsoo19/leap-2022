// click to change bg color

let mybtn = document.getElementById("btn");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

mybtn.addEventListener("click", () => {
    p1.style = "background-color: red; "
    p2.style = "background-color: yellow; "
})

