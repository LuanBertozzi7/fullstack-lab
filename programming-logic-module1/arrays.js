// destructuring in js

const numeros = [1, 2, 3, 4, 5, 6, 7];
// with ...<name> get rest of variables or arrays [rest operator or spread]
const [firstNumber, secondNumber, ...rest] = numeros;

console.log(firstNumber, secondNumber, rest);

const number = [   // indices
  [1, 2, 3, 4], // 0 => 0 1 2 3
  [5, 6, 7, 8,], // 1 => 0 1 2 3 
  [9, 10] // 2 => 0 1
]
console.log(number[1][2]);

