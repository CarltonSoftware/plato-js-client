var SingleEntity = require('./SingleEntity');

function AgencyBookingType(id) {
    this.path = 'agencybookingtype';
    this.createPath = 'agencybookingtype';
    this.id = id;
}
AgencyBookingType.prototype = new SingleEntity();

AgencyBookingType.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
  };
};

module.exports = AgencyBookingType;
