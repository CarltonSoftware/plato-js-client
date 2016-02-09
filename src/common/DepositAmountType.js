var SingleEntity = require('./SingleEntity');

function DepositAmountType(id) {
    this.path = 'depositamounttype';
    this.createPath = 'depositamounttype';
    this.id = id;
}
DepositAmountType.prototype = new SingleEntity();

DepositAmountType.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a DepositAmountType
    depositamounttype: this.depositamounttype,
  };
};

DepositAmountType.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a DepositAmountType
    depositamounttype: this.depositamounttype,
  };
};

module.exports = DepositAmountType;
