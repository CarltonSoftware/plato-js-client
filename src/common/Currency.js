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
    code: Joi.string().required().label('code'),
    name: Joi.string().required().label('name'),
    decimalplaces: Joi.string().required().label('decimalplaces'),
    plaintextsymbol: Joi.string().label('plaintextsymbol')
  };
};

Currency.prototype.toArray = function() {
  return {
    code: this.code,
    name: this.name,
    decimalplaces: this.decimalplaces,
    plaintextsymbol: this.plaintextsymbol
  };
};

Currency.prototype.toUpdateArray = function() {
  return {
    currencycode: this.code,
    currencyname: this.name,
    decimalplaces: this.decimalplaces,
    plaintextsymbol: this.plaintextsymbol
  };
};

Currency.prototype.toCreateArray = function() {
  return {
    currencycode: this.code,
    currencyname: this.name,
    decimalplaces: this.decimalplaces,
    plaintextsymbol: this.plaintextsymbol
  };
};

module.exports = Currency;
