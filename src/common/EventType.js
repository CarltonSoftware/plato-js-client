var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function EventType(id) {
  this.createPath = this.path = 'eventtype';
  this.id = id;

  this.validSchema = function() {
    return {
      eventtype: Joi.string().required().label('Event name').description('The name of your event you want to define'),
      appliestobooking: Joi.boolean().required().label('Applies to booking'),
      appliestoactor: Joi.boolean().required().label('Applies to actor'),
      appliestoproperty: Joi.boolean().required().label('Applies to property')
    };
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

module.exports = EventType;
