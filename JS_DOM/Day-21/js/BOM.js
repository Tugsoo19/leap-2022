console.log('bom js');
console.log(window);

//window.alert("Hello")

// window.open('https://google.com', 'Hello');



// let result = window.confirm('Та устгахдаа итгэлтэй байна уу?');
// console.log(result);

// let message = result ? "Та ОК товчийг дарлаа": 
// "Та cancel товчийг дарсан" ; 

// alert(message)


let alertButton = document.getElementById('alertButton');
let cancelButton = document.getElementById('cancelButton');
let timeoutID;

// function showAlert() {
//     timeoutID = setTimeout(alert, 3000, 'setTimeout Demo');
// }

// alertButton.addEventListener('click', showAlert)

alertButton.addEventListener('click', () => {
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo');
});

cancelButton.addEventListener('click', () => {
    // console.log(timeoutID);
    window.clearTimeout(timeoutID);

})
console.log(timeoutID);

setTimeout(() => {
    console.log('Time out is running');
}, 5000)

let counter = 0;



function startInterval() {
    let now = new Date();

    let myTimer = document.getElementById('myTimer');
    myTimer.innerHTML = now
    console.log(counter);
    counter++;
}

let time = document.getElementById('time');

time.addEventListener('click', runTimerInterval)

function runTimerInterval() {
    window.setInterval(startInterval, 1000);
}

function startInterval() {
    let now = new Date();

    let myTimer = document.getElementById('myTimer');
    myTimer.innerHTML = now
    // console.log(counter);
    // counter++;
}


