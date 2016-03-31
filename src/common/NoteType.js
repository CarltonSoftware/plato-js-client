var SingleEntity = require('./SingleEntity');

function NoteType(id) {
    this.path = 'notetype';
    this.createPath = 'notetype';
    this.id = id;
}
NoteType.prototype = new SingleEntity();

NoteType.prototype.toArray = function() {
  return {
    id: this.id,
    notetype: this.notetype,
    description: this.description,
    donotdelete: this.donotdelete
  };
};

module.exports = NoteType;
