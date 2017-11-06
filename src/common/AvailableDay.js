var Entity = require('./Entity');

function AvailableDay(id) {
  this.path = 'availability';
  this.createPath = this.path;
}

AvailableDay.prototype = new Entity();

module.exports = AvailableDay;