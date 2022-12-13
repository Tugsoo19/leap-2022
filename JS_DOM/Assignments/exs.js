console.log("exercises");

document.getElementById("aimag-101").innerHTML;

console.log(document.getElementById("aimag-101").innerHTML);

document.getElementById("aimag-522").innerHTML;

console.log(document.getElementById("aimag-522").innerHTML);

console.log(document.getElementById("aimag-315").innerHTML);
document.getElementById("aimag-315").innerHTML = "Bavaria";

document.getElementById("aimagNames").style = "font-size : 20px; color: blue; "

document.getElementById("aimag-103").style = "color : pink; font-size : 30px; border: 3px dotted blue";

document.getElementById("aimag-407").style = "color : pink; font-size : 30px; border: 3px dotted blue";

for(let i=0; i < document.getElementsByClassName("khangai").length; i++){
    document.getElementsByClassName("khangai")[i].style = "font-size: 25px; background-color: green"
}

for(let i=0; i < document.getElementsByClassName("baruun").length; i++){
    document.getElementsByClassName("baruun")[i].style = "font-size: 25px; background-color: yellow;"
}
for(let i=0; i < document.getElementsByClassName("zuun").length; i++){
    document.getElementsByClassName("zuun")[i].style = "font-size: 25px; background-color: brown;"
}

for(let i=0; i < document.getElementsByClassName("tuv").length; i++){
    document.getElementsByClassName("tuv")[i].style = "font-size: 25px; background-color: blue; color : white"
}

console.log(document.getElementById("aimagNames").id);
const liLength = document.getElementById("aimagNames").getElementsByTagName("li").length;
console.log(document.getElementById("aimagNames").getElementsByTagName("li")[liLength-1].innerHTML);

document.getElementsByTagName("span")[0].innerHTML = "Helloooooo";

console.log(document.getElementById("aimagNames").getElementsByTagName("li")[0].id.includes("aimag-1"));

for( let i=0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++) {
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-1")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: black; color: white; max-width: 400px"
    }
}

console.log(document.querySelector("#aimagNames"));
console.log(document.querySelector(".khangai"));

console.log(document.getElementsByClassName("khangai"));
console.log(document.querySelectorAll(".khangai"));

document.querySelector("#demo").innerHTML = "Date: " + Date();


console.log((document.querySelector("img").src = "img/pic.png").style = "border: 2px solid blue");


const newDiv = document.createElement("h2");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);  // newDiv.innerHtml = "Манай сайтад тавтай морил"
const main = document.getElementsByTagName("body");

const h1 = document.querySelector('h1')
h1.appendChild(newDiv);

console.log(document.getElementsByTagName("body"));