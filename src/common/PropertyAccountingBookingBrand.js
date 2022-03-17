var SingleEntity = require('./SingleEntity');
var BookingBrand = require('./BookingBrand');
var EntityLink = require('./EntityLink');

function PropertyAccountingBookingBrand(propertyId, bookingBrandId, id) {
  this.propertyId = propertyId;
  this.path = 'property/' + this.propertyId + '/bookingbrand/' + bookingBrandId + '/accounting';
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
