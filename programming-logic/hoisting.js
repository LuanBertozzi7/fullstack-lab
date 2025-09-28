/*        VAR         */
// it's as if JS declared shape first, and only then would it be initialized  
function getShape() {
  console.log(shape); // undefined

  if(false) {
    var shape = "shape";
    console.log(shape); // shape
  } else {
    console.log(shape); // undefined
    // shape does not exist here
  }
}
// getShape();

/*        LET         */
function getShape() {
  console.log(shape); // ReferenceError: shape is not defined

  if(false) {
    let shape = "shape";
    console.log(shape); // shape exist only here
  } else {
    console.log(shape); // ReferenceError: shape is not defined
    // shape does not exist here
  }
}

/*        CONST         */

// const shape; // SyntaxError: Missing initializer in const declaration
// can't be redeclared, but can have your attributes redeclared

const human = {
  name: 'luan',
  age: 19,
}
human.age = 20; // this can!