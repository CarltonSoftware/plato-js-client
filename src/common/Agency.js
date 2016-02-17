var Actor = require('./Actor');

function Agency(id) {
  this.path = 'agency';
  this.createPath = 'agency';

  Actor.apply(this, arguments);
}
Agency.prototype = new Actor();

module.exports = Agency;
