//Use the destructuring to assign the values just with one code line.

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

//let [id, firstName, lastName, age] = "1 Mario Rossi 25".split(' ');

let = [id = person.id, firstName = person.firstName, lastName = person.lastName, age = person.age];

console.log(id, firstName, lastName, age);