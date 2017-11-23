var SingleEntity = require('./SingleEntity');

function OwnerBookingType(id) {
    this.path = 'ownerbookingtype';
    this.createPath = 'ownerbookingtype';
    this.id = id;
}
OwnerBookingType.prototype = new SingleEntity();

OwnerBookingType.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
  };
};

module.exports = OwnerBookingType;
