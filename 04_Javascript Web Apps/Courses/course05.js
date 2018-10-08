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

function Extend(sub, base) {
  var origProto = sub.prototype;
  sub.prototype = Object.create(base.prototype);
  for (var key in origProto) {
    sub.prototype[key] = origProto[key]
  }
  //sub.prototype.constructor = sub;
  Object.defineProperty(sub.prototype, 'constructor', {
    enumerable: false,
    value: sub
  });
}

function Prof(name, age) {
  Person.call(this, name, age);
}

extend(Person, Prof);

Prof.prototype.speak = function(phrase){
  console.log("==================");
  //both work
  //this.__proto__.__proto__.speak.call(this, phrase);
  //this is more static, since you need to change when Person is renamed
  //Person.prototype.speak.call(this, phrase);
}