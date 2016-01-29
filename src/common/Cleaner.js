var Actor = require('./Actor');

function Cleaner(id) {
  this.path = 'cleaner';
  this.createPath = 'cleaner';
}
Cleaner.prototype = new Actor();

module.exports = Cleaner;
