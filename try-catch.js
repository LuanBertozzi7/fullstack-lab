// function sum(x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     throw new Error('x or y not a number');
//   }
//   return x + y;
// }

// try {
//   console.log(sum('luan', 3));
// } catch(err) {
//   console.log(err)
// }


try {
  // this executes when there is no error
} catch(error) {
  // this executes when there is an error
} finally {
  // always executes
}

function returnDate(date){
  if(date && !(date instanceof Date)) {
    throw new TypeError('expected an instance of date');
  }
  if(!date) {
    date = new Date();
  }

  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,    
  })
}

try {
  let hours = returnDate();
  console.log(hours);
} catch(err) {
  hours = returnDate();
  console.log(hours)
  console.log('your date function, encountered an unexpected error');
} finally {
  console.log('have a great day');
}