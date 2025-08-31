// reduce
const numbers = [ 1, 533, 54, 6, 4, 3, 33 ]
const total = numbers.reduce((acc, curr) => acc + curr, 0)
const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0])
const min = numbers.reduce((acc, curr) => (curr < acc ? curr : acc), numbers[0])
const product = numbers.reduce((acc, curr) => acc * curr, 1)
