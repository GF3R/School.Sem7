class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello(): string {
    return "helly my name is " + this.name;
  }
}

let alice = new Person("Alice");
console.log(alice.sayHello());

// primitive types
let done: boolean = false;
let answer: number = 43;
let firstname: string = "John";
let thing: any;

// arrays
let list1: number[] =  [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// enums
enum color { Red, Green, Blue};