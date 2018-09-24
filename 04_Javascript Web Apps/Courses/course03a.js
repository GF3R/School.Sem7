var incrementer = function () {
  var c = 0;
  return function () {
    c++;
    return c;
  }
}

var inc1 = incrementer();
console.log(inc1());
console.log(inc1());

var inc2 = incrementer();
console.log(inc2());
console.log(inc2());


var f = function(a) {
  //...
}

function g() {
  //....
}