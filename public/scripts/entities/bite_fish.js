class BiteFish extends Fish {

  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/biteFish.gif'; // Set the image
    this.maxSwimSpeed = 500;
    this.isTasty = false;
  }

  onClick(event) {
    this.makeNewVelocity(200);
  }
}
