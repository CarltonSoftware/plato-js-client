var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function BookingBrand(id) {
  this.path = 'bookingbrand';
  this.createPath = 'bookingbrand';
  this.id = id;
  this.agency = new EntityLink({
    entity: 'Agency'
  });
}
BookingBrand.prototype = new SingleEntity();

BookingBrand.prototype.toArray = function() {
  return {
    bookingbrandcode: this.code,
    bookingbrand: this.name,
    agencyid: this.agency.id
  };
};

module.exports = BookingBrand;
