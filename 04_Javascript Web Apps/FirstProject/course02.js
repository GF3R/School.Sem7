
var square = function(x) {
    return x*x;
}

var a = square(12);

var y = 12;

var f = function() {
    var b = 0;
    x = y + 13;
    var g = function(){
        b += x + y;
        return b;
    }
    return g;
}

var a = f();
console.log(typeof a); //ist eine function
console.log(a());
console.log(a());


//javascript is function scoped
//console.log(b); //-> Causes an error since b is only declared locally
console.log(a);

var h = function() {
    var y = 13;
    f(); // -> da lexikalisch und nicht dynamisch ist im f immer noch 12 und nicht! 13
}
h();