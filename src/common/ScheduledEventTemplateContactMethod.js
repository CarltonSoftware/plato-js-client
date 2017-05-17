var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Collection = require('./Collection');
var Booking = require('./Booking');
var Property = require('./Property');
var ActorInstance = require('./ActorInstance');

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
      if (element.guesttype) {
        return Booking;
      } else if (element.type == 'property') {
        return Property;
      } else {
        return ActorInstance.call(this, element.type.toLowerCase());
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
ScheduledEventTemplateContactMethod.prototype.hasBranding = function(branding) {
  if (this.templatecontactmethod.id && this.templatecontactmethod.parent) {
    if (this.templatecontactmethod.parent.type === 'BookingTemplate') {
      return this.templatecontactmethod.parent.bookingbrand.id === branding.bookingbrand.id;
    }
    if (this.templatecontactmethod.parent.type === 'ActorTemplate') {
      return this.templatecontactmethod.parent.branding.id === branding.id;
    }
    if (this.templatecontactmethod.parent.type === 'WorkOrderTemplate') {
      return this.templatecontactmethod.parent.branding.id === branding.id;
    }
    if (this.templatecontactmethod.parent.type === 'MarketingCampaignTemplate') {
      return this.templatecontactmethod.parent.marketingbrand.id === branding.marketingbrand.id;
    }
  }
  return false;
};

ScheduledEventTemplateContactMethod.prototype.validSchema = function() {
  return Joi.object().keys({
    templatecontactmethod: Joi.object().required().label('templatecontactmethod')
  });
};

module.exports = ScheduledEventTemplateContactMethod;
