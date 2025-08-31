// defineProperty
function Product(name, price, stock) {
  this.name = name;
  this.price = price;
  this.stock = stock;
  Object.defineProperties(this, {
    name: {
      enumerable: true,
      value: name,
      writable: false,
      configurable: false,
    },

    price: {
      enumerable: true,
      value: price,
      writable: false,
      configurable: false,
    },

    stock: {
      enumerable: true, // show key
      value: stock, // show the value
      writable: false, // can it be rewritten?
      configurable: true, // can it be reconfigured?
    },
  });
}
const newProduct = new Product("cup", 12, 4);

console.log(Object.keys(newProduct));
