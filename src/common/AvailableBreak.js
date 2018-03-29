var SingleEntity = require('./SingleEntity');

function AvailableBreak() {
  this.path = 'availablebreak';
  this.createPath = this.path;
}

AvailableBreak.prototype = new SingleEntity();

module.exports = AvailableBreak;