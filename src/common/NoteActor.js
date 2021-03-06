var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function NoteActor(id) {
  this.createPath = 'actor';
  this.path = 'actor';
  this.id = id;
  this.actor = new EntityLink({
    entity: 'Actor'
  });
}
NoteActor.prototype = new SingleEntity();

NoteActor.prototype.toArray = function() {
  return {
    actorid: this.actorid,
    notifychanges: this.notifychanges,
    reminderdate: this.reminderdate,
  };
};

module.exports = NoteActor;
