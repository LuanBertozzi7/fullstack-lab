function recursive(max) {
  if(max >= 10) return;
  max++;
  console.log(max);
  recursive(max);
}


console.log(recursive(-10));

