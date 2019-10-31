var SingleEntity = require('./SingleEntity');
var VatBand = require('./VatBand');
var Joi = require('joi');

function OwnerChargeCode(id) {
  this.path = 'ownerchargecode';
  this.createPath = 'ownerchargecode';
  this.id = id;
  this.vatband = new VatBand();

  this.validSchema = function() {
    return {
      ownerchargecode: Joi.string().required().label('ownerchargecode'),
      description: Joi.string().required().label('description'),
      vatband: Joi.object().required().label('VAT band'),
      recharge: Joi.boolean().label('recharge (doesn\'t apply vat)'),
      inactive: Joi.boolean().label('inactive (Doesn\'t appear on select lists)')
    };
  }
}

OwnerChargeCode.prototype = new SingleEntity();
OwnerChargeCode.prototype.toArray = function() {
  return {
    ownerchargecode: this.ownerchargecode,
    description: this.description,
    vatbandid: this.vatband.id,
    recharge: this.recharge,
    inactive: this.inactive
  };
};
OwnerChargeCode.prototype.toString = function() {
  return this.description + ' (' + this.ownerchargecode + ')'; //[this.ownerchargecode, this.description].join(' ');
};

module.exports = OwnerChargeCode;
