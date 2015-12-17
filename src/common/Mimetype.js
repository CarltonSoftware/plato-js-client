var SingleEntity = require('./SingleEntity');

function Mimetype(id) {
  this.path = 'mimetype';
  this.createPath = 'mimetype';
}
Mimetype.prototype = new SingleEntity();
Mimetype.prototype.toArray = function() {
  return {
    name: this.name,
    shortname: this.shortname
  };
};

module.exports = Mimetype;
