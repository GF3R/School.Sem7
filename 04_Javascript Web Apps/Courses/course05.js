function Person(name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.speak = function (phrase) {
  console.log(this.name + phrase);
};

function Student(name, age, university) {
  Person.call(this, name, age);
  this.university = university;
};

//what we want but can't doStudent.prototype.__proto__ = Person.prototype; 

Student.prototype = Object.create(Person.prototype); //wie ein inherit
Student.prototype.constructor = Student;

Student.prototype.sleep = function () {
  // ...
};

Student.prototype.speak = function () {
  // ...
};
var bob = new Student("Bob", 25, "BFH");