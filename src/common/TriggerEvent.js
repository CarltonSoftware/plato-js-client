var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function TriggerEvent(id) {
  this.createPath = this.path = 'triggerevent';
  this.id = id;

  this.validSchema = function() {
  	return {
	    triggerevent: Joi.string().label('trigger event'),
	    eventdescription: Joi.string().label('event description')
  	}
  }
}

TriggerEvent.prototype = new SingleEntity();

TriggerEvent.prototype.toArray = function() {
  return {
    triggerevent: this.triggerevent,
    eventdescription: this.eventdescription,
  };
};

module.exports = TriggerEvent;
