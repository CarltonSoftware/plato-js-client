var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function EventType(id) {
  this.createPath = this.path = 'eventtype';
  this.id = id;

  this.validSchema = function() {
    var s = {
      eventtype: Joi.string().required().label('Event name').description('The name of your event you want to define')
    };

    if (!this.id) {
      s.appliestobooking = Joi.boolean().required().label('Applies to booking');
      s.appliestoactor = Joi.boolean().required().label('Applies to actor');
      s.appliestoproperty = Joi.boolean().required().label('Applies to property');
    }

    return s;
  };
}

EventType.prototype = new SingleEntity();

EventType.prototype.toArray = function() {
  return {
    eventtype: this.eventtype,
    appliestobooking: this.appliestobooking,
    appliestoactor: this.appliestoactor,
    appliestoproperty: this.appliestoproperty
  };
};

EventType.prototype.toString = function() {
  return this.eventtype;
};

module.exports = EventType;
