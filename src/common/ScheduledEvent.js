var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
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
    filter: this.filter,
    filtercontext: this.filtercontext,
    frequency: this.frequency,
    sendonce: this.sendonce
  };
};

ScheduledEvent.prototype.validSchema = function() {
  return Joi.object().keys({
    filter: Joi.string().required().label('filter'),
    filtercontext: Joi.string().required().label('filtercontext'),
    frequency: Joi.string().required().label('frequency'),
    sendonce: Joi.boolean().required().label('sendonce')
  });
};

module.exports = ScheduledEvent;
