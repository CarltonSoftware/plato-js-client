var SingleEntity = require('./SingleEntity');

function TriggerEvent(id) {
  this.createPath = this.path = 'triggerevent';
  this.id = id;
}

TriggerEvent.prototype = new SingleEntity();

TriggerEvent.prototype.toArray = function() {
  return {
    triggerevent: this.triggerevent,
    eventdescription: this.eventdescription,
  };
};

module.exports = TriggerEvent;
