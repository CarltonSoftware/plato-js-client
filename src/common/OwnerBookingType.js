var SingleEntity = require('./SingleEntity');

function OwnerBookingType(id) {
    this.path = 'agencybookingtype';
    this.createPath = 'agencybookingtype';
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
