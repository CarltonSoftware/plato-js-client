var SingleEntity = require('./SingleEntity');

function VatBand(id) {
  this.path = 'vatband';
  this.createPath = 'vatband';
  this.id = id;
}

VatBand.prototype = new SingleEntity();
VatBand.prototype.toArray = function() {
  return {
    vatband: this.vatband
  };
};

module.exports = VatBand;
