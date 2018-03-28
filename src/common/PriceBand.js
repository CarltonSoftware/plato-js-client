var SingleEntity = require('./SingleEntity');

function PriceBand(id) {
  this.path = 'priceband';
  this.createPath = 'priceband';
  this.id = id;
}

PriceBand.prototype = new SingleEntity();
PriceBand.prototype.toArray = function() {
  return {
    priceband: this.priceband,
    description: this.description
  };
};
PriceBand.prototype.toString = function() {
  var string = this.priceband;
  if (this.description && this.description != 'Band '+string) {
    string += '  (' + this.description + ' )';
  }
  return string;
};

module.exports = PriceBand;
