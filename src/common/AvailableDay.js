var SingleEntity = require('./SingleEntity');

function AvailableDay(id) {
  this.path = 'availability';
  this.createPath = this.path;
}

AvailableDay.prototype = new SingleEntity();

module.exports = AvailableDay;