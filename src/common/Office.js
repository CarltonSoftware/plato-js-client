var Actor = require('./Actor');

function Office(id) {
  this.path = 'office';
  this.createPath = 'office';

  Actor.apply(this, arguments);
}
Office.prototype = new Actor();

module.exports = Office;
