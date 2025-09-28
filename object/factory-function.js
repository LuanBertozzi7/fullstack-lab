/*
    factory functions, are a functions that returns new object
    to avoid having to manually create a new object every time, we can use a factory function as a template
*/

// INSTEAD
let person1 = {
  name: "luan",
  lastname: "bertozzi",
  id: 1,
  age: 19,
};
// WE CAN USE
function createPerson(firstName, lastName, id, age) {
  return {
    firstName: firstName,
    lastName: lastName,
    id: id,
    age: age,
    getFullName() {
      return this.firstName + this.lastName;
    },
  };
}

const Person1 = createPerson("luan", "bertozzi", 1, 19);
const Person2 = createPerson("luan", "bertozzi", 2, 19);
const Person3 = createPerson("luan", "bertozzi", 3, 19);

console.log(Person1);
console.log(Person2);
console.log(Person3);
