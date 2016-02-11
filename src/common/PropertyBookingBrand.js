var SingleEntity = require('./SingleEntity');
var Agency = require('./Agency');

function PropertyBookingBrand(propertyID, id) {
  this.path = '/property/'+propertyID+'/bookingbrand';
  this.createPath = '/property/'+propertyID+'/bookingbrand';
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
