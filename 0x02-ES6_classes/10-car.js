/**
 * Car class
 * @method constructor
 * @method cloneCar
 * @property {string} _brand
 * @property {string} _motor
 * @property {string} _color
 */
export default class Car {
  /**
   * 
   * @param {string} brand 
   * @param {string} motor 
   * @param {string} color 
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * @returns {string} - new Car instance
   */
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
