const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (number of numbers) {
  
  
  if (number === 2 || number === 10) {
    /* CONTINUE -> to skip the current iteration of a loop, use the continue statemeant*/ 
    continue;
  }
  if (number === 7){
    /* BREAK -> exit the loop when a condition is true  */
    break;
  }
  console.log(number);
}