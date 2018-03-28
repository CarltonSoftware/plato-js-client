var Joi = require('joi');
var SingleEntity = require('./SingleEntity');

function AccountValueType(id) {
  this.path = 'accountvaluetype';
  this.createPath = 'accountvaluetype';
  this.id = id;
}
AccountValueType.prototype = new SingleEntity();

AccountValueType.prototype.toArray = function() {
  return {
    valuetype: this.valuetype,
    description: this.description,
  };
};

AccountValueType.prototype.validSchema = function() {
  return Joi.object().keys({
    valuetype: Joi.string().required().label('valuetype'),
    description: Joi.string().required().label('description'),
  });
};

module.exports = AccountValueType;
