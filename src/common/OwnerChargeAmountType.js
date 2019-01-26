var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function OwnerChargeAmountType(id) {
  this.path = 'ownerchargeamounttype';
  this.createPath = 'ownerchargeamounttype';
  this.id = id;

  this.validSchema = function() {
    return {
      ownerchargeamounttype: Joi.string().required().label('ownerchargeamounttype'),
      description: Joi.string().required().label('description'),
    };
  }
}
OwnerChargeAmountType.prototype = new SingleEntity();

OwnerChargeAmountType.prototype.toArray = function() {
  return {
    ownerchargeamounttype: this.ownerchargeamounttype,
    description: this.description,
  };
};

OwnerChargeAmountType.prototype.toString = function() {
  return this.ownerchargeamounttype + ' (' + this.description + ')';
};

module.exports = OwnerChargeAmountType;
