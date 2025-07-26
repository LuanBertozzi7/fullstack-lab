const firstNumber = 1;
const secondNumber = 9;

function biggerBetweenTwo(firstNumber, secondNumber) {
let result;
  if(firstNumber > secondNumber){
    result = console.log(`o número ${firstNumber} é maior`);
  } else if (secondNumber > firstNumber) {
    result = console.log(`o número ${secondNumber} é maior`);
  } else if (firstNumber === secondNumber) {
    result = console.log(`ambos os numeros são iguais`);
  }
  return result;  
};


console.log(biggerBetweenTwo(firstNumber, secondNumber));