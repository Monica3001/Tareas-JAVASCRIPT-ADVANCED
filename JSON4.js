
//In this exercise we need to filter the properties of the 
//object person in order to convert just the id and age values into JSON.

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

var json = JSON.stringify({id: 1, age: 25});


console.log(json); // Should return: { "id": 1, "age": 25 }