var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return "helly my name is" + this.name;
    };
    return Person;
}());
var alice = new Person("Alice");
console.log(alice.sayHello());
