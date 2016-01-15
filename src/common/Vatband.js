var SingleEntity = require('./SingleEntity');

function VatBand(id) {
    this.path = 'vatband';
    this.createPath = 'vatband';
    this.id = id;
}
VatBand.prototype = new SingleEntity();

VatBand.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a VatBand
    vatband: this.vatband,
  };
};

VatBand.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a VatBand
    vatband: this.vatband,
  };
};

module.exports = VatBand;
