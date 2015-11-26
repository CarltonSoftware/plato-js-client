var SingleEntity = require('./SingleEntity');

function Note(noteID) {
    this.createPath = 'note';
    this.path = 'note';
    this.id = noteID;
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
      hightlight: this.highlight,
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
