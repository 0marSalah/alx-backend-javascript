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
    return new Car();
  }
}
