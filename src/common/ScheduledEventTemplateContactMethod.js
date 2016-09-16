var SingleEntity = require('./SingleEntity');
var TemplateContactMethod = require('./TemplateContactMethod');

function ScheduledEventTemplateContactMethod(id) {
  this.path = 'templatecontactmethod';
  this.createPath = 'templatecontactmethod';
  this.id = id;
  this.templatecontactmethod = new TemplateContactMethod();
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
