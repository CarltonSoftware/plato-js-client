var SingleEntity = require('./SingleEntity');
var Note = require('./Note');
var EntityLink = require('./EntityLink');

function ActorNote(id) {
  this.createPath = 'actornote';
  this.path = 'actornote';
  this.id = id;
  this.note = new Note();
  this.actor = new EntityLink({
    entity: 'Actor'
  });
}

ActorNote.prototype = new SingleEntity();

ActorNote.prototype.toArray = function() {
  return {
    actorid: this.actor.id,
    noteid: this.note.id,
  };
};

module.exports = ActorNote;
