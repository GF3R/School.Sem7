
var colors = new Array("blue", "red", "green"); // bad practice
//this should not be done since it is unlogical ->
var a = new Array(3, 5);
var b = new Array(3);

console.log(a.length);
console.log(b.length);

//type mixing
var bob = ["Bob", 25, 5.25, true, "Alice", function () {
  console.log("I'm Bob");
}];
var NAME = 0;
var AGE = 1;
var FRIEND = 4;
console.log(bob[NAME] + "s girlfriend is " + bob[FRIEND]);
bob[5]();


//the array is filled up with empty items
var a = [5, 7, 8];
a[2] = 45;
a[7] = 99;
a[44] = 23;
console.log(a);
console.log(a.length);

//redimensionern nimmt ab pos 3 4 items weg.
a.splice(3, 4);
console.log(a);
console.log(a.length);

//push adds item to end of array
a.push(1001);
console.log(a);
console.log(a.length);

//pop removes item to end of array
a.pop();
console.log(a);
console.log(a.length);

a = ["blue", "bed", "red"];
a[6] = 22;

for (var i = 0; i < a.length; i++) {
  if (a[i] != undefined) {
    console.log(a[i]);
  }
}

//Without lambdas
a.forEach(function (item, index) {
  console.log(index + " -> " + item);
})

//with lambdas however new!
a.forEach(element => {
  console.log(element);
});

var color1 = "blue";
var color2 = "red";
var color3 = "green";

var colors = ["blue", "red", "green"];

console.log(colors[0]);
console.log(colors.length);

colors['favorite'] = 'pink';
console.log(colors.length);
console.log(colors);
console.log(colors.favorite);


