var SingleEntity = require('./SingleEntity');

function BookingExtra(bookingId, id) {
  this.path = 'extra';
  this.createPath = 'extra';
  this.id = id;
}
BookingExtra.prototype = new SingleEntity();

BookingExtra.prototype.toArray = function() {

  var extra = {
    extraid: this.extraid,
    quantity: this.quantity
  };
  if (this.quantity != 0) {
    extra.unitprice = this.unitprice;
  }
  if (this.extrabookingreasonid) {
    extra.extrabookingreasonid = this.extrabookingreasonid;
  }
  return extra;
};

module.exports = BookingExtra;
