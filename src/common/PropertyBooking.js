var SingleEntity = require('./SingleEntity');

function PropertyBooking(propertyId, id) {

    this.path = 'booking';
    this.createPath = 'booking';
    this.id = id;
}
PropertyBooking.prototype = new SingleEntity();

PropertyBooking.prototype.toArray = function() {
  return {
    id: this.id
  };
};
PropertyBooking.prototype.toCreateArray = function() {
  return {
    ownerid: this.ownerid
  };
};

module.exports = PropertyBooking;