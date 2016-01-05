var Actor = require('./Actor');

function Cleaner(id) {
  this.path = 'actor';
  this.createPath = 'actor';
}
Cleaner.prototype = new Actor();

module.exports = Cleaner;
