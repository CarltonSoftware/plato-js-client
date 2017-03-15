var SingleEntity = require('./SingleEntity');

function PotentialBookingType(id) {
  this.path = 'potentialbookingtype';
  this.createPath = 'potentialbookingtype';
  this.id = id;
}

PotentialBookingType.prototype = new SingleEntity();
PotentialBookingType.prototype.toArray = function() {
  return {
    name: this.name,
    affectsavailability: this.affectsavailability,
    expirydays: this.expirydays,
    expiryhours: this.expiryhours,
    expiryminutes: this.expiryminutes,
    autoexpire: this.autoexpire,
    ignorepricingandchangedays: this.ignorepricingandchangedays,
    description: this.description
  };
};
PotentialBookingType.prototype.toString = function() {
  return [this.name].join(' ');
};

module.exports = PotentialBookingType;