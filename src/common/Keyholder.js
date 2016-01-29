var Actor = require('./Actor');

function Keyholder(id) {
  this.path = 'keyholder';
  this.createPath = 'keyholder';
}
Keyholder.prototype = new Actor();

module.exports = Keyholder;
