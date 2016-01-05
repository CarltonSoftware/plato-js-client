var Actor = require('./Actor');

function Keyholder(id) {
  this.path = 'actor';
  this.createPath = 'actor';
}
Keyholder.prototype = new Actor();

module.exports = Keyholder;
