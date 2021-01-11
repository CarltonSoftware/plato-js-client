var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function TriggerEvent(id) {
  this.createPath = this.path = 'triggerevent';
  this.id = id;
}

TriggerEvent.prototype = new SingleEntity();

TriggerEvent.prototype.validSchema = function() {
  return {
    triggerevent: Joi.string().label('trigger event'),
    eventdescription: Joi.string().label('event description')
  };
};

TriggerEvent.prototype.toArray = function() {
  return {
    triggerevent: this.triggerevent,
    eventdescription: this.eventdescription,
  };
};

TriggerEvent.prototype.toString = function() {
  return this.triggerevent;
};

module.exports = TriggerEvent;
