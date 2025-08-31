const products = {
  name: "cup",
  price: 1.99,
};

const copyProducts = {
  ...products, // copy object's
};

const cup = Object.assign({}, products, {material: 'porcelain'});


console.log(products);
console.log(cup)