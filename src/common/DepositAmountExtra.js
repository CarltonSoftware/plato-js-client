var SingleEntity = require('./SingleEntity');
var Extra = require('./Extra');

function DepositAmountExtra(id) {
    this.path = 'extra';
    this.createPath = 'extra';
    this.id = id;

    this.extra = new Extra();
}
DepositAmountExtra.prototype = new SingleEntity();

DepositAmountExtra.prototype.toArray = function() {
  var fields = { subtract: this.subtract };
  if (this.extra) {
    fields.extraid = this.extra.id;
  }
  return fields;
};

module.exports = DepositAmountExtra;