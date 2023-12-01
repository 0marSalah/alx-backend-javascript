import Car from './10-car';

export class EVCar extends Car {
  /**
   * @param {string} brand 
   * @param {string} motor 
   * @param {string} color 
   * @param {number} range 
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /**
   * @returns {string} - new Car instance
   */
  cloneCar() {
    return new Car (this._brand, this._motor, this._color);
  }
}

const ec1 = new EVCar('Tesla', 'Turbo', 'Red', '250');
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);