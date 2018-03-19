var BookingSupplier = require('./BookingSupplier');

function BookingService(id) {
  BookingSupplier.apply(this, arguments);

  this.path = 'service';
  this.createPath = 'service';
}
BookingService.prototype = new BookingSupplier();

module.exports = BookingService;
