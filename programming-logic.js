
/* FUNÇÂO QUE RETORNA O MAIOR NUMERO ENTRE DUAS VARIAVEIS */
// const firstNumber = 102;
// const secondNumber = 9;

// function biggerBetweenTwo(firstNumber, secondNumber) {

//   if(firstNumber > secondNumber){
//     return `o número ${firstNumber} é maior`;
//   } else if (secondNumber > firstNumber) {
//     return `o número ${secondNumber} é maior`;
//   } else if (firstNumber === secondNumber) {
//     return `ambos os numeros são iguais`;
//   }
//   return result;  
// };


// console.log(biggerBetweenTwo(firstNumber, secondNumber));

/* FUNÇÂO QUE VERIFICA SE UMA IMAGEM(RECEBENDO DOIS ARGUMENTOS, ALTURA E LARGURA, E RETORNA SE 
ESTÁ NO MODO PAISAGEM  */
// function isLandscape(width, height) {
  
//   if( width > height ) {
//     return `your image, already in landscape`
//   } else if ( width < height ) {
//     return `your image, already in portrait` 
//   } else {
//     return `your image is square`
//   }
// }

for (let i = 0; i <= 100; i++) {
  let forNumber;
  forNumber = i
}

function FizzNumber(Usernumber) {
  if(typeof Usernumber !== "number") {
    return `is NaN`
  }
  if(Usernumber % 3 === 0){
    return `Fizz`
  } else if (Usernumber % 5 === 0){
    return `Buzz`
  } else if (Usernumber % 3 === 0 && Usernumber % 5 === 0) {
    return `FizzBuzz`
  } else {
    return Usernumber
  }
}

console.log(FizzNumber(forNumber))