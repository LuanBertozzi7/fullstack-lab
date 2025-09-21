class RemotControl {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // instance method
  increaseVolume() {
    this.volume++;
  }
  decreaseVolume() {
    this.volume--;
  }

  // static method
  static replacementBattery() {
    console.log(`all baterry of remote control, were exchanged`);
  }
}

const control = new RemotControl("control");

control.increaseVolume();
control.increaseVolume();
control.increaseVolume();
control.increaseVolume();
RemotControl.replacementBattery();
console.log(control);
