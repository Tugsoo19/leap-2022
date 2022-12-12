// function declaration - функцыг тодорхойлох

function f() {
    console.log("Hello Function");
}

// function call - функцыг дуудах

f();

//1. 
function f1 (x) {
    console.log(x * x);
    
}
f1(5);

//2. 
function f2 (x,y) {
    console.log(Math.pow(x,2)+ Math.pow(y,2))
    console.log(Math.pow((x+y),2))
}

f2(2,4);

//3.

function E (m,c) {
    console.log(m * Math.pow(c,2))
    
}
const c = 300000
E(45,c)

//4. Factorial

function factorial(x) {
    let multiplication = 1;
    for(let i=1; i<= x; i++){
        multiplication = multiplication * i;
    }
    console.log(multiplication);
}
factorial(7);

//5. 

function f4 (x,y) {
    console.log(Math.cos(x)-Math.sin(y))
}
f4 (2,6)

//7

function f5 (x) {
    console.log(Math.pow(x,2))
}
f5(5)

//6

function f6 (x) {
    console.log(Math.pow(x,3)+ Math.pow(x,2)+ 5*x +12)
}
f6(4);

9 

function f7 (x) {
    console.log(Math.sqrt(x))
}
f7(8);