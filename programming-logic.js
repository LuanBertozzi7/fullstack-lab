// FUNCTION THAT RETURNS THE LARGER NUMBER BETWEEN TWO VARIABLES
const firstNumber = 102;
const secondNumber = 9;

/**
 * 
 * @param {number} firstNumber 
 * @param {number} secondNumber 
 * @returns {string} // check the numbers, and returns a string about them
 */

function biggerBetweenTwo(firstNumber, secondNumber) {
  
  // Check if the first number is greater than the second
  if (firstNumber > secondNumber) {
    return `The number ${firstNumber} is bigger`;
  } 
  // Check if the second number is greater than the first
  else if (secondNumber > firstNumber) {
    return `The number ${secondNumber} is bigger`;
  } 
  // If both numbers are equal
  else if (firstNumber === secondNumber) {
    return `Both numbers are equal`;
  }
  // No need for this return, but kept for safety
  return null;  
}

console.log(biggerBetweenTwo(firstNumber, secondNumber));

/**
 * @param {number} width 
 * @param {number} height 
 * @returns {string} // FUNCTION THAT CHECKS IF AN IMAGE (GIVEN WIDTH AND HEIGHT) IS IN LANDSCAPE MODE
 */
function isLandscape(width, height) {
  // Width greater than height means landscape
  if (width > height) {
    return `Your image is already in landscape`;
  } 
  // Width less than height means portrait
  else if (width < height) {
    return `Your image is already in portrait`;
  } 
  // Width equals height means square
  else {
    return `Your image is square`;
  }
}


// Loop from 0 to 100 and save the last number in a variable
let forNumber;
for (let i = 0; i <= 100; i++) {
  forNumber = i;
}


// FUNCTION THAT RETURNS "Fizz", "Buzz", "FizzBuzz" OR THE NUMBER BASED ON DIVISIBILITY
function FizzNumber(Usernumber) {
  // Check if input is a number
  if (typeof Usernumber !== "number") {
    return `is NaN`;
  }
  // Check if divisible by both 3 and 5 first
  if (Usernumber % 3 === 0 && Usernumber % 5 === 0) {
    return `FizzBuzz`;
  }
  // Check if divisible by 3
  else if (Usernumber % 3 === 0) {
    return `Fizz`;
  }
  // Check if divisible by 5
  else if (Usernumber % 5 === 0) {
    return `Buzz`;
  }
  // If none of the above, return the number itself
  else {
    return Usernumber;
  }
}

console.log(FizzNumber(forNumber));
