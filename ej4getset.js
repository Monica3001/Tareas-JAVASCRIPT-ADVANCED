//Define a class called Person that takes in three parameters
//in the constructor (firstName, lastName and age).
//Create the getters and setters methods for each property and
//a getter method called fullName that returns the full name.

class Person{

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFN) {
    if (typeof newFN === "string") {
      this._firstName = newFN;
    } else {
      console.error("error not a string");
    }
  }

  set lastName(newLN) {
    if (typeof newLN === "string") {
      this._lastName = newLN;
    } else {
      console.log("error not a string");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number") {
      this._age = newAge;
    } else {
      console.log("error not a number");
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get age() {
    return this._age;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);