var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

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
