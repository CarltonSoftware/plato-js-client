var SingleEntity = require('./SingleEntity');

function NoteType(noteTypeId) {
    this.path = 'notetype/' + noteTypeId;
    this.id = noteTypeId;
}
NoteType.prototype = new SingleEntity();

module.exports = NoteType;
