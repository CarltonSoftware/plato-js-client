var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function WorkOrderActor(id) {
  this.path = this.createPath = 'actor';
  this.id = id;
  this.actor = new EntityLink({
    entity: 'Actor'
  });
}
WorkOrderActor.prototype = new SingleEntity();

WorkOrderActor.prototype.toArray = function() {
  return {
    actorid: this.actor.id
  };
};

module.exports = WorkOrderActor;
