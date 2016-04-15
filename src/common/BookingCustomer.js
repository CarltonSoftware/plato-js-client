var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function BookingCustomer(bookingId, id) {
  this.path = 'booking/' + bookingId + '/customer';
  this.createPath = 'booking/' + bookingId + '/customer';
  this.id = id;
  this.details = new EntityLink({
    entity: 'Customer'
  });
}
BookingCustomer.prototype = new SingleEntity();

BookingCustomer.prototype.toArray = function() {
  return {
    customerid: this.customerid ? this.customerid : this.details.id,
  };
}

module.exports = BookingCustomer;
