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
    quantity: this.quantity,
    descriptionoverride: this.descriptionoverride,
    extranotes: this.extranotes,
  };
  
  if (this.quantity != 0) {
    extra.unitprice = this.unitprice;
  }

  if (this.extrabookingreasonid) {
    extra.extrabookingreasonid = this.extrabookingreasonid;
  }

  if (this.additionalinfo) {
    extra.additionalinfo = this.additionalinfo;
  }

  return extra;
};

module.exports = BookingExtra;
