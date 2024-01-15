//Create the fromJson method (es como una funcion dentro de la clase)
//that takes in a json as parameter
// and returns an object of type Person.

class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  toJson() {
    return JSON.stringify(this);
  }
  fromJson(js) {
    const { id, firstName, lastName, age } = JSON.parse(js);
    return new Person(id, firstName, lastName, age);
  }
}

const persona = new Person(1, "Mario", "Rossi", 25);

const personaJson = persona.toJson();
console.log(personaJson);

const persona2 = persona.fromJson(personaJson);
console.log(persona2);

