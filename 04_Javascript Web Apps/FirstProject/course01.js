//console.log("Hello World!");
var x = 2;

var b = false;
var q = "10";
var c = b || q > 10;

b = "asdf";
console.log(typeof q);

console.log((q + x)); //output? 102

console.log((q - x)); //output? 8

var numberQ = Number(q);
var isNumber = isNaN(numberQ);

console.log(isNumber);