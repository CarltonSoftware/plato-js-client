var SingleEntity = require('./SingleEntity');

function AvailableDay() {
  this.path = 'availability';
  this.createPath = this.path;
}

AvailableDay.prototype = new SingleEntity();

module.exports = AvailableDay;