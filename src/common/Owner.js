var Actor = require('./Actor');

function Owner(id) {
  this.path = 'owner';
  this.createPath = 'owner';
}
Owner.prototype = new Actor();

module.exports = Owner;
