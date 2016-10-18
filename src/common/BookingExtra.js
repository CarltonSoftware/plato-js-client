var SingleEntity = require('./SingleEntity');

function BookingExtra(bookingId, id) {
  this.path = 'extra';
  this.createPath = 'extra';
  this.id = id;
}
BookingExtra.prototype = new SingleEntity();

BookingExtra.prototype.toArray = function() {
  return {
    extraid: this.extraid,
    quantity: this.quantity,
    unitprice: this.unitprice,
  };
};

module.exports = BookingExtra;
