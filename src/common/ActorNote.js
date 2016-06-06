var SingleEntity = require('./SingleEntity');
var Note = require('./Note');

function ActorNote(id) {
  this.createPath = 'actornote';
  this.path = 'actornote';
  this.id = id;
  this.note = new Note();
}

ActorNote.prototype = new SingleEntity();

ActorNote.prototype.toArray = function() {
  return {
    actorid: this.actorid,
    noteid: this.note.id,
  };
};

ActorNote.prototype.toCreateArray = function() {
  return {
    actorid: this.actorid,
    noteid: this.note.id,
  };
};

module.exports = ActorNote;
