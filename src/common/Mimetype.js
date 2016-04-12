var SingleEntity = require('./SingleEntity');

function Mimetype(id) {
    this.path = 'mimetype';
    this.createPath = 'mimetype';
    this.id = id;

    this.toArray = function() {
      return {
        name: this.name,
        shortname: this.shortname
      }
    }
}
Mimetype.prototype = new SingleEntity();

module.exports = Mimetype;
