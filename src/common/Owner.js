var Actor = require('./Actor');

function Owner(id) {
  this.path = 'actor';
  this.createPath = 'actor';
}
Owner.prototype = new Actor();

module.exports = Owner;
