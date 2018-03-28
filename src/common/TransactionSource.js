var Joi = require('joi');
var SingleEntity = require('./SingleEntity');

function TransactionSource(id) {
  this.path = 'transactionsource';
  this.createPath = 'transactionsource';
  this.id = id;
}
TransactionSource.prototype = new SingleEntity();

TransactionSource.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
  };
};

TransactionSource.prototype.validSchema = function() {
  return Joi.object().keys({
    name: Joi.string().required().label('name'),
    description: Joi.string().required().label('description'),
  });
};

module.exports = TransactionSource;
