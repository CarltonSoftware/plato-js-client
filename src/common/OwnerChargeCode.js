var SingleEntity = require('./SingleEntity');
var VatBand = require('./VatBand');

function OwnerChargeCode(id) {
  this.path = 'ownerchargecode';
  this.createPath = 'ownerchargecode';
  this.id = id;
  this.vatband = new VatBand();
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
  return [this.ownerchargecode, this.description].join(' ');
};

module.exports = OwnerChargeCode;
