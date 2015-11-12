var SingleEntity = require('./SingleEntity');

function NoteText(noteID, noteTextId) {
    this.createPath = 'note/' + noteID + '/text';
    this.path = 'note/' + noteID + '/text';
    this.id = noteTextId;
}
NoteText.prototype = new SingleEntity();

NoteText.prototype.toArray = function() {
    return {
        id: this.id,
        createdbyactorid: this.createdbyactorid,
        notetext: this.notetext,
        followupdatetime: this.followupdatetime
    };
};

NoteText.prototype.toCreateArray = function() {
    return {
        createdbyactorid: this.createdbyactorid,
        notetext: this.notetext,
        followupdatetime: this.followupdatetime,
    };
};

module.exports = NoteText;
