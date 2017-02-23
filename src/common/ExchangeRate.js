var SingleEntity = require('./SingleEntity');
var Currency = require('./Currency');

function ExchangeRate(id) {
  this.path = this.createPath = 'exchangerate';
  this.id = id;
  this.currency = new Currency();
}

ExchangeRate.prototype = new SingleEntity();
ExchangeRate.prototype.toArray = function() {
  return {
    unitsperbaseunint: this.unitsperbaseunint,
    currencyid: this.currency.id
  };
};

module.exports = ExchangeRate;
