var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function AmountLimitType(id) {
  this.path = 'amountlimittype';
  this.createPath = 'amountlimittype';
  this.id = id;

  this.validSchema = function() {
    return {
      amountlimittype: Joi.string().required().label('amountlimittype'),
      description: Joi.string().required().label('description'),
    };
  }
}
AmountLimitType.prototype = new SingleEntity();

AmountLimitType.prototype.toArray = function() {
  return {
    amountlimittype: this.amountlimittype,
    description: this.description,
  };
};

module.exports = AmountLimitType;
