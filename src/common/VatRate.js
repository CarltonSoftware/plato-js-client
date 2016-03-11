var SingleEntity = require('./SingleEntity');
var VatBand = require('./VatBand');

function VatRate(id) {
  this.path = 'vatrate';
  this.createPath = 'vatrate';
  this.id = id;
  this.vatband = new VatBand();
}
VatRate.prototype = new SingleEntity();

VatRate.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    percentage: this.percentage,
    vatband: this.vatband.vatband
  };
};
module.exports = VatRate;
