var Actor = require('./Actor');

function Owner() {
  this.path = 'owner';
  this.createPath = 'owner';

  Actor.apply(this, arguments);
}
Owner.prototype = new Actor();

module.exports = Owner;
