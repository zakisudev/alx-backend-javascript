import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (!(currency instanceof Currency)) {
      throw TypeError('Currency must be an instance of the Currency class');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw TypeError('Currency must be an instance of the Currency class');
    }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
