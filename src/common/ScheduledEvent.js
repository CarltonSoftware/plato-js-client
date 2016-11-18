var client = require('./platoJsClient').getInstance();
var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Joi = require('joi');
var ScheduledEventTemplateContactMethod = require('./ScheduledEventTemplateContactMethod');

function ScheduledEvent(id) {
  this.path = 'scheduledevent';
  this.createPath = 'scheduledevent';
  this.id = id;
  this.templatecontactmethods = new Collection({
    object: ScheduledEventTemplateContactMethod,
    path: 'templatecontactmethod',
    parent: this
  });
}

ScheduledEvent.prototype = new SingleEntity();
ScheduledEvent.prototype.toArray = function() {
  return {
    label: this.label,
    filter: this.filter,
    filtercontext: this.filtercontext,
    frequency: this.frequency,
    sendonce: this.sendonce,
    inactive: this.inactive
  };
};

ScheduledEvent.prototype.validSchema = function() {
  return Joi.object().keys({
    label: Joi.string().required().label('label'),
    filter: Joi.string().required().label('filter'),
    filtercontext: Joi.string().required().label('filtercontext'),
    frequency: Joi.string().required().label('frequency'),
    sendonce: Joi.boolean().required().label('sendonce'),
    inactive: Joi.boolean().required().label('inactive')
  });
};

ScheduledEvent.prototype.process = function() {
  return client.put(this.getUpdatePath() + '/process');
};

module.exports = ScheduledEvent;
