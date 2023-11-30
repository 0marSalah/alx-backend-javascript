import Currency from "./3-currency";

/**
 * @param {number} amount
 * @param {Currancy} currency
*/
export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }
  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw TypeError('Currency must be a Currency class type');
    }
    this._currency = newCurrency;
  }
  get amount() {
    return this._amount;
  }
  get currency() {
    return this._currency;
  }
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }
}
const p = new Pricing(100, new Currency('EUR', 'Euro'));
console.log(p);
console.log(p.displayFullPrice());
