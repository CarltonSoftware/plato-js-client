var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var NoteText = require('./NoteText');
var EntityLink = require('./EntityLink');

function Note(noteID) {
  this.createPath = 'note';
  this.path = 'note';
  this.id = noteID;
  this.notetexts = new Collection({object: NoteText});
  this.createdby = new EntityLink({
    entity: 'TabsUser'
  });
  this.actornote = new EntityLink({
    entity: 'ActorNote'
  });
}
Note.prototype = new SingleEntity();

Note.prototype.toArray = function() {
  return {
    id: this.id,
    notetype: this.notetype,
    subject: this.subject,
    createdby: this.createdby,
    visibletocustomer: this.visibletocustomer,
    visibletoowner: this.visibletoowner,
    visibletocleaner: this.visibletocleaner,
    visibletokeyholder: this.visibletokeyholder,
    highlight: this.highlight,
    pin: this.pin
  };
};

Note.prototype.toCreateArray = function() {
  return {
    notetype: this.notetype,
    subject: this.subject,
    createdbyactorid: this.createdbyactorid,
    visibletocustomer: this.visibletocustomer,
    visibletoowner: this.visibletoowner,
    visibletocleaner: this.visibletocleaner,
    visibletokeyholder: this.visibletokeyholder,
    highlight: this.highlight,
    pin: this.pin,
    notetext_createdbyactorid: this.notetext_createdbyactorid,
    notetext_notetext: this.notetext_notetext,
    notetext_followupdatetime: this.notetext_followupdatetime
  };
};

module.exports = Note;
