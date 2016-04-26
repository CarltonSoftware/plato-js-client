var SingleEntity = require('./SingleEntity');
var Agency = require('./Agency');

function PropertyBookingBrand(id) {
  this.path = 'bookingbrand';
  this.createPath = 'bookingbrand';
  this.id = id;
  this.agency = new Agency();
}

PropertyBookingBrand.prototype = new SingleEntity();
PropertyBookingBrand.prototype.toArray = function() {
  return {
    bookingbrandcode: this.code,
    bookingbrand: this.name,
    agencyid: this.agency.id
  };
};

module.exports = PropertyBookingBrand;
