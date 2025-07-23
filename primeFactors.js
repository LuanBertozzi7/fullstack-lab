function factoringMMC(number) {
  const factors = [];
  let divider = 2;

  while(number > 1){
    if (number % divider === 0) {
        factors.push(divider);
        number = number / divider;
    } else {
      divider++;
    }
  }
  return factors;
}


const first_number = 60;
const fatoresPrimos = factoringMMC(first_number);
console.log(`fatores primos de ${first_number}: ${fatoresPrimos.join(' x ')}`);