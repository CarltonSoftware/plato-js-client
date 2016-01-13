var SingleEntity = require('./SingleEntity');

function Currency(id) {
    this.path = 'currency';
    this.createPath = 'currency';
    this.id = id;
}
Currency.prototype = new SingleEntity();

Currency.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a Currency
    currencycode: this.code,
    currencyname: this.name,
    decimalplaces: this.decimalplaces,
  };
};

Currency.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a Currency
    currencycode: this.code,
    currencyname: this.name,
    decimalplaces: this.decimalplaces,
  };
};

module.exports = Currency;
