var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var NoteText = require('./NoteText');
var EntityLink = require('./EntityLink');

function Note(noteID) {
  this.createPath = 'note';
  this.path = 'note';
  this.id = noteID;
  this.notetexts = new Collection({
    object: NoteText,
    path: 'text',
    parent: this
  });
  this.createdby = new EntityLink({
    entity: 'TabsUser'
  });
  this.bookingnote = new EntityLink({
    entity: 'BookingNote'
  });
  this.actornote = new EntityLink({
    entity: 'ActorNote'
  });
  this.noteactor = new EntityLink({
    entity: 'NoteActor',
    parent: this
  });
}
Note.prototype = new SingleEntity();

Note.prototype.mutateResponse = function(entity) {
  var user = 'TabsUser';
  var type = entity.createdby.split('/')[2];

  switch (type) {
    case 'owner':
    case 'customer':
    case 'agency':
    case 'supplier':
    case 'office':
      user = type.charAt(0).toUpperCase() + type.slice(1);
      break;
  }

  this.createdby = new EntityLink({
    entity: user
  });

  return this.mutateEntity(entity);
};

Note.prototype.toArray = function() {
  return {
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
