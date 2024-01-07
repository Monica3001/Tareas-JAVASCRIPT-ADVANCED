//Convert the developer object into JSON

class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);
let strg = JSON.stringify(developer);
console.log(strg);
let jsonobject =JSON.parse(strg);
console.log(jsonobject)

// Print developer as JSON object