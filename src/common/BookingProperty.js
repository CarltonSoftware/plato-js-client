var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function BookingProperty(bookingId, id) {
  this.path = 'property';
  this.createPath = 'property';
  this.id = id;
  this.details = new EntityLink({
    entity: 'Property'
  });
}
BookingProperty.prototype = new SingleEntity();

BookingProperty.prototype.toArray = function() {
  return {
    propertyid: this.propertyid ? this.propertyid : this.details.id,
  };
};

module.exports = BookingProperty;
