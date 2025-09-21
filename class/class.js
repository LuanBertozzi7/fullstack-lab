class Person {
  // this is a mold
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  say() {
    console.log(`${this.name} is talking...`);
  }

  eat() {
    console.log(`${this.name} is eating...`);
  }

  drink() {
    console.log(`${this.name} is drinking...`);
  }
}

const person1 = new Person("Luan", "Bertozzi"); //  this is a instance

person1.say();
person1.eat();
person1.drink();
console.log(person1);
