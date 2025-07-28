let i = 0;
while(i <= 10) {
  console.log(i);
  i++
};
// RANDOM NUMBER
function RandomNumber(min, max) {
  const r = Math.random() * (max- min) + min;
  return Math.floor(r);
};

do {
  rand = RandomNumber(1, 50);
  console.log(rand);
} while(rand !== 10);