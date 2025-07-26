const fruts = ["pear", "watermelon", "litter"];

const cars = {
  model: "onix",
  engine: "v12",
  color: "red",
  id: 482208
};

// --- Loop Examples in JavaScript ---

// 1. Classic FOR: iterates over array using index
for (let i = 0; i < fruts.length; i++) {
  console.log(`Classic FOR: ${fruts[i]}`);
}

// 2. FOR IN: iterates over array indices
for (let i in fruts) {
  console.log(`FOR IN (array): ${fruts[i]}`);
}

// 3. FOR IN with object: iterates over object keys
for (let key in cars) {
  console.log(`FOR IN (object): ${key}: ${cars[key]}`);
}

// 4. FOR OF: iterates over array values
for (let value of fruts) {
  console.log(`FOR OF: ${value}`);
}

// 5. forEach: executes a function for each array element and index
fruts.forEach(function(element, index){
  console.log(`forEach: ${element}, index: ${index}`);
});