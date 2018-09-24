var bob = {
  name: "Bob",
  age: 25,

};

console.log(bob.name);
console.log(bob.age);
console.log(bob["name"]);
console.log(bob["age"]);

bob.age = bob.age + 1;
bob.age++;

bob.hairColor = "black";
console.log(bob.hairColor);
console.log(bob.lastname);

var alice = {
  name: "Alice",
  age: 22
}

bob.girlfriend = alice;
alice['lastname'] = "Wonderland";

alice.speak = function () {
  console.log("hi i'm " + this.name);

}
alice.speak();
console.log(bob.girlfriend);
//the function can be declared in advance

function speak2(phrase) {
  console.log(this.name + " says '" + phrase + "'");
}

alice.speak = speak2;
alice.speak("ereasd");

function personCreator(p, name, age) {
  p.name = name;
  p.age = age;
  p.speak = speak2;
}

var alice = {};
personCreator(alice, "Alice", 22);
var bob = {};
personCreator(bob, "Bob", 231)

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.speak = function (phrase) {
  console.log(this.name + " says '" + phrase + "'");
}

var alice = new Person("Alice", 22);
var bob = new Person("Bob", 25);

alice.lastname = "Wonderland";