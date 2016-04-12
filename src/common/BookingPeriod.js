var SingleEntity = require('./SingleEntity');

function BookingPeriod(id) {
  this.path = 'bookingperiod';
  this.createPath = 'bookingperiod';
  this.id = id;
}

BookingPeriod.prototype = new SingleEntity();
BookingPeriod.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
  };
};

module.exports = BookingPeriod;
