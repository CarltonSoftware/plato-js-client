var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Collection = require('./Collection');
var Booking = require('./Booking');

function ScheduledEventTemplateContactMethod(id) {
  this.path = 'templatecontactmethod';
  this.createPath = 'templatecontactmethod';
  this.id = id;
  this.templatecontactmethod = new EntityLink({
    entity: 'TemplateContactMethod',
    parent: new EntityLink({
      entity: 'Template'
    })
  });

  this.available = new Collection({
    path: 'available',
    parent: this,
    ignoreparent: true, // We only want parent for path so set this to true so that entities do not have parent set.
    discriminator: function(element) {
      if (element['webbooking']) {
        return Booking;
      } else {
        return function() {};
      }
    }
  });
}

ScheduledEventTemplateContactMethod.prototype = new SingleEntity();
ScheduledEventTemplateContactMethod.prototype.toArray = function() {
  return {
    templatecontactmethodid: this.templatecontactmethod.id
  };
};

ScheduledEventTemplateContactMethod.prototype.validSchema = function() {
  return Joi.object().keys({
    templatecontactmethod: Joi.object().required().label('templatecontactmethod')
  });
};

module.exports = ScheduledEventTemplateContactMethod;
