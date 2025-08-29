const numbers = [ 1, 5, 10, 4, 8 ];

const DoubleNumber = numbers.map(value => value * 2);
console.log(DoubleNumber); 

const users = [
  { name: 'christopher luan' },
  { name: 'joana martinz'},
  { name: 'larissa triz'},
]

const addIdToUsers = users.map(function(obj, index) {
  obj.id = (index + 1);
  return obj;
})
console.log(addIdToUsers);