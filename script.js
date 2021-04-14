"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));


function ret() {
    let num = 50;
    console.log(calc(4, 5));
}

const anotherNum = ret();
console.log(anotherNum);


let logger = function() {
    console.log("Hello");
};

logger();


let c = 4;
function addX(x) {
  return function(n) {
     return n + x;
  }
}
const addThree = addX(3);
let d = addThree(c);
console.log('example partial application', d);
