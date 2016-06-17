var SingleEntity = require('./SingleEntity');

function OwnerChargeCode(id) {
  this.path = 'ownerchargecode';
  this.createPath = 'ownerchargecode';
  this.id = id;
}

OwnerChargeCode.prototype = new SingleEntity();
OwnerChargeCode.prototype.toArray = function() {
  return {
    ownerchargecode: this.ownerchargecode,
    description: this.description
  };
};

module.exports = OwnerChargeCode;
