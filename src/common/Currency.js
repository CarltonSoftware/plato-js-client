var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function Currency(id) {
    this.path = 'currency';
    this.createPath = 'currency';
    this.id = id;
}
Currency.prototype = new SingleEntity();

Currency.prototype.validSchema = function() {
  return {
    currencycode: Joi.string().required().label('currencycode'),
    currencyname: Joi.string().required().label('currencyname'),
    decimalplaces: Joi.string().required().label('decimalplaces')
  };
};

Currency.prototype.toArray = function() {
  return {
    currencycode: this.code,
    currencyname: this.name,
    decimalplaces: this.decimalplaces
  };
};

module.exports = Currency;
