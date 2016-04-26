var SingleEntity = require('./SingleEntity');

function Encoding(id) {
  this.path = 'encoding';
  this.createPath = this.path;
  this.id = id;
}
Encoding.prototype = new SingleEntity();

Encoding.prototype.toArray = function() {
  return {
    encoding: this.encoding
  };
};

module.exports = Encoding;