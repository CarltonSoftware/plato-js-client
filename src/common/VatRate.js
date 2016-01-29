var SingleEntity = require('./SingleEntity');
var VatRate = require('./VatBand');

function VatRate(id) {
    this.path = 'vatrate';
    this.createPath = 'vatrate';
    this.id = id;
    this.vatband = new VatBand;
}
VatRate.prototype = new SingleEntity();

VatRate.prototype.toCreateArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    percentage: this.percentage,
  };
};

VatRate.prototype.toUpdateArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    percentage: this.percentage,
  };
};

module.exports = VatRate;
