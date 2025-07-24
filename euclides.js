//  function to calculate MDC using the euclides algorithm 
function calculateMDC(a, b) {
  while(b) {
    const rest = a % b;
    a = b;
    b = rest;
  }
  return a;
}
// function to calculate MMC
function calculateMMC(a, b) {
  if(a === 0 || b === 0) {
    return 0;
  }
  return (a*b) / calculateMDC(a, b);
}

// const firstNumber = prompt("first Number:");
// const secondNumber= prompt("second Number");

// const MDC = calculateMDC(firstNumber, secondNumber);
// const MMC = calculateMMC(firstNumber, secondNumber);
  
// console.log(`MDC:${MDC} MMC:${MMC}`);

