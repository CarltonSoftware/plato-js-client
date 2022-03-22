var SingleEntity = require('./SingleEntity');
var BookingBrand = require('./BookingBrand');

function PropertyAccountingBookingBrand(propertyId, id) {
  this.propertyId = propertyId;
  this.path = 'property/' + this.propertyId + '/accountingbookingbrand';
  this.createPath = this.path;
  this.id = id;
  this.bookingbrand = new BookingBrand();
}

PropertyAccountingBookingBrand.prototype = new SingleEntity();

PropertyAccountingBookingBrand.prototype.toArray = function() {
  return {
    bookingbrandid: this.bookingbrandid,
    fromdate: this.fromdate,
    todate: this.todate
  };
};

module.exports = PropertyAccountingBookingBrand;
