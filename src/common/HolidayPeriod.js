var SingleEntity = require('./SingleEntity');

function HolidayPeriod(id) {
  this.path = this.createPath = 'bookingperiod';
  this.id = id;
}

HolidayPeriod.prototype = new SingleEntity();
HolidayPeriod.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    donotsplit: this.donotsplit,
  };
};

module.exports = HolidayPeriod;
