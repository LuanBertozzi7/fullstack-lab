// defineProperty
function Product(name, price, stock) {
  this.name = name;
  this.price = price;
  let privateStock = stock;

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
      // writable: false, // can it be rewritten?
      // value: stock, // show the valuex
      enumerable: true, // show key
      configurable: true, // can it be reconfigured?

      get: function () {
        return `current stock is ${privateStock}`;
      },

      set: function (value) {
        if (typeof value !== "number") {
          console.log("stock not a number");
          return;
        }
        privateStock = value;
      },
    },
  });
}

const CUP = new Product("cup", 12);
CUP.stock = 18;
console.log(CUP.stock);
