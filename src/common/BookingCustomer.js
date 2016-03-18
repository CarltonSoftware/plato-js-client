var SingleEntity = require('./SingleEntity');
var Customer = require('./Customer');

function BookingCustomer(bookingId, id) {
  this.path = 'booking/' + bookingId + '/customer';
  this.createPath = 'booking/' + bookingId + '/customer';
  this.id = id;
  this.details = new Customer;
}
BookingCustomer.prototype = new SingleEntity();

BookingCustomer.prototype.toArray = function() {
  return {
    customerid: this.customerid ? this.customerid : this.details.id,
  };
}

module.exports = BookingCustomer;
