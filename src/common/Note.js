var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var NoteText = require('./NoteText');
var NoteType = require('./NoteType');
var EntityLink = require('./EntityLink');
var NoteActor = require('./NoteActor');

function Note(noteID) {
  this.createPath = 'note';
  this.path = 'note';
  this.id = noteID;
  this.notetexts = new Collection({
    object: NoteText,
    path: 'text',
    parent: this
  });
  this.notetype = new NoteType();
  this.noteactors = new Collection({
    object: NoteActor,
    path: 'actor',
    parent: this
  });
}
Note.prototype = new SingleEntity();

Note.prototype.toArray = function() {
  return {
    notetype: this.notetype.notetype,
    subject: this.subject,
    createdbyactorid: this.createdby.id,
    completedbyactorid: this.completedby.id,
    archivedbyactorid: this.archivedby.id,
    visibletocustomer: this.visibletocustomer,
    visibletoowner: this.visibletoowner,
    visibletocleaner: this.visibletocleaner,
    visibletokeyholder: this.visibletokeyholder,
    highlight: this.highlight,
    pin: this.pin,
    private: this.private

  };
};

Note.prototype.toCreateArray = function() {
  var note = {
    notetype: this.notetype.notetype,
    subject: this.subject,
    createdbyactorid: this.createdby.id,
    visibletocustomer: this.visibletocustomer ? 'true' : 'false',
    visibletoowner: this.visibletoowner ? 'true' : 'false',
    visibletocleaner: this.visibletocleaner ? 'true' : 'false',
    visibletokeyholder: this.visibletokeyholder ? 'true' : 'false',
    highlight: this.highlight ? 'true' : 'false',
    pin: this.pin ? 'true' : 'false',
    private: this.private ? 'true' : 'false',
    notetext_createdbyactorid: this.notetext_createdbyactorid,
    notetext_notetext: this.notetext_notetext,
    notetext_followupdatetime: this.notetext_followupdatetime,
    notetext_actionedbyactorid: this.notetext_actionedbyactorid,
    notetext_actioneddatetime: this.notetext_actioneddatetime,
    bookingid: this.bookingid
  };
  if (this.completedbyactorid) {
    note.completedbyactorid = this.completedbyactorid;
  }
  if (this.archivedbyactorid) {
    note.archivedbyactorid = this.archivedbyactorid;
  }
  return note;
};

module.exports = Note;
