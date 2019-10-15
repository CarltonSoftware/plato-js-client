var BookingSupplier = require('./BookingSupplier');
var BookingServiceCharge = require('./BookingServiceCharge');

function BookingService() {
  BookingSupplier.apply(this, arguments);

  this.path = 'service';
  this.createPath = 'service';
  this.bookingservicecharge = new BookingServiceCharge();
}

BookingService.prototype = new BookingSupplier();


module.exports = BookingService;
