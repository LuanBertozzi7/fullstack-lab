const _speed = Symbol("speed");

class Car {
  constructor(name) {
    this.name = name;
    this[_speed] = 0;
  }

  set speed(value) {
    if (typeof value !== "number") return;
    if (value > 100 || value < 0) return;
    this[_speed] = value;
  }

  get speed() {
    return this[_speed];
  }

  accelerate() {
    if (this[_speed] >= 100) return;
    this[_speed]++;
    this.currentSpeed();
  }

  accelerateTest() {
    for (let i = 0; i <= 101; i++) {
      this.accelerate();
    }
  }

  brake() {
    if (this[_speed] <= 0) return;
    this[_speed]--;
    this.currentSpeed();
  }

  currentSpeed() {
    console.log(`your [_speed] is ${this[_speed]}`);
  }
}
const ferrari = new Car("ferrari", 40);

ferrari.speed = 3000;

console.log(ferrari);
