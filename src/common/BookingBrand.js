var SingleEntity = require('./SingleEntity');
var Agency = require('./Agency');

function BookingBrand(id) {
  this.path = 'bookingbrand';
  this.createPath = 'bookingbrand';
  this.id = id;
  this.agency = new Agency();
}
BookingBrand.prototype = new SingleEntity();

BookingBrand.prototype.toArray = function() {
  return {
    code: this.code,
    name: this.name,
    agencyid: this.agencyid
  };
};

module.exports = BookingBrand;
