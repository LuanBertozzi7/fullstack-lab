// only return numbers greater than 10, WITHOUT FILTER FUNCTION
const numbers = [12, 3, 65, 76, 2, 7, 9, 13, 87, 3, 98, 34];
for (i = 0; i < numbers.length; i++) {
  if(numbers[i] > 10) {
    // console.log(numbers[i]);
  }
}
//                                      anonymous function
const filtersNumber = numbers.filter(value => value > 10)
// console.log(filtersNumber);

/* ---------------------- // ---------------- */

const person = [
  { names: 'christopher', age: 19},
  { names: 'Luis', age: 23},
  { names: 'Joana', age: 17},
]

// greater or equal to 5
const personWithNameBiggerOrEqual = person.filter(obj => obj.names.length >= 5); // callback
console.log(personWithNameBiggerOrEqual);
// person age greater or equal to 20
const personWithfifty = person.filter(obj => obj.age >= 20);
console.log(personWithfifty);
// ends with 'a'
const personA = person.filter(obj => obj.names.toLowerCase().endsWith('a'));
console.log(personA )

