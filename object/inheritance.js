/* ABSTRACTION
  product ==> increase, discount

  shirt => color
  mug => material
*/
function product(name, price) {
  this.name = name; // constructor function
  this.price = price;
}

product.prototype.increase = function (e) {
  // {e} equal to the amount that will increase
  this.price += e;
};
product.prototype.discount = function (e) {
  // {e} equal to the amount that will discount
  this.price -= e;
};

function shirt(name, price, color) {
  product.call(this, name, price);
  this.color = color;
}

shirt.prototype = Object.create(product.prototype);
shirt.prototype.constructor = shirt;

const Shirt = new shirt("New jeans", 10.0, "red");
console.log(Shirt);
