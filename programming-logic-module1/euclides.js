/**
 * Calculates the GCD (Greatest Common Divisor) using Euclid's algorithm
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The GCD of a and b
 */
function calculateMDC(a, b) {
  while (b) {
    const rest = a % b;
    a = b;
    b = rest;
  }
  return Math.abs(a);
}

/**
 * Calculates the LCM (Least Common Multiple) of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The LCM of a and b
 */
function calculateMMC(a, b) {
  if (a === 0 || b === 0) {
    return 0;
  }
  return Math.abs((a * b) / calculateMDC(a, b));
}
