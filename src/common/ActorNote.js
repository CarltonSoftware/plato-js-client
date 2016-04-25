var SingleEntity = require('./SingleEntity');

function ActorNote(actornoteID) {
  this.createPath = 'actornote';
  this.path = 'actornote';
  this.id = actornoteID;
}
ActorNote.prototype = new SingleEntity();

ActorNote.prototype.toArray = function() {
  return {
    actorid: this.actorid,
    noteid: this.noteid,
  };
};

ActorNote.prototype.toCreateArray = function() {
  return {
    actorid: this.actorid,
    noteid: this.noteid,
  };
};

module.exports = ActorNote;
