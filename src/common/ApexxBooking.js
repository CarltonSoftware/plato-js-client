var SingleEntity = require('./SingleEntity');

function ApexxBooking(id) {
  this.path = 'apexx/booking';
  this.createPath = this.path;
  this.id = id;
}


ApexxBooking.prototype = new SingleEntity();

ApexxBooking.prototype.toArray = function() {
  return { };
};

ApexxBooking.prototype.getAccountid = function() {
  return this.okPromiseResult(this.getUpdatePath() + '/accountid');
}

module.exports = ApexxBooking;