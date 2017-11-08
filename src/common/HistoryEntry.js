var SingleEntity = require('./SingleEntity');
var Actor = require('./Actor');
var EntityLink = require('./EntityLink');

function HistoryEntry() {
  this.actor = new Actor();
}

HistoryEntry.prototype = new SingleEntity();
HistoryEntry.prototype.toArray = function() {
  return {
    actor: this.actor,
    client: this.client,
    datetime: this.datetime,
    description: this.description,
    parameters: this.parameters
  };
};

HistoryEntry.prototype.mutateResponse = function(entity) {
	if (entity.entity && entity.entity.route) {
    var e = new EntityLink({
      entity: entity.entity.type
    });
    this[entity.entity.type.toLowerCase()] = e.factory(entity.entity.route);
  }

  return this.mutateEntity(entity);
};

module.exports = HistoryEntry;
