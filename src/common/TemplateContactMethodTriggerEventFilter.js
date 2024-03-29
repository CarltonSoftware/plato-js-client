var SingleEntity = require('./SingleEntity');
var EventType = require('./EventType');
var Source = require('./Source');
var BookingService = require('./BookingService');
var ActorInstance = require('./ActorInstance');
var Branding = require('./Branding');
var Joi = require('joi');

function TemplateContactMethodTriggerEventFilter(id) {
  this.createPath = this.path = 'filter';
  this.id = id;
  this.bookingservice = new BookingService();
  this.eventtype = new EventType();
  this.actor = ActorInstance.call(this, 'affiliate');
  this.source = new Source();
  this.type = 'Source';
  this.ownerbranding = new Branding();
  this.bookingbranding = new Branding();

  this.validSchema = function() {
    var s = {
      type: Joi.string().required().label('type').allow(['Source', 'EventType', 'Actor', 'BookingService', 'OwnerBranding', 'BookingBranding']),
      exclude: Joi.boolean().required().label('Exclude?')
    };

    if (this.type === 'BookingService') {
      s.bookingservice = Joi.object().required().label('Booking Service');
    } else if (this.type === 'EventType') {
      s.eventtype = Joi.object().required().label('Event Type');
    } else if (this.type === 'Actor') {
      s.actor = Joi.object().required().label('Actor');
    } else if (this.type === 'BookingBranding') {
      s.bookingbranding = Joi.object().required().label('Booking Branding');
    } else if (this.type === 'OwnerBranding') {
      s.ownerbranding = Joi.object().required().label('Owner Branding');
    } else {
      s.source = Joi.object().required().label('Source');
    }

    return s;
  }.bind(this)
}

TemplateContactMethodTriggerEventFilter.prototype = new SingleEntity();

TemplateContactMethodTriggerEventFilter.prototype.toArray = function() {
  var s = {
    type: this.type,
    exclude: this.exclude
  };
  if (this.type === 'BookingService') {
    s.bookingserviceid = this.bookingservice.id;
  } else if (this.type === 'EventType') {
    s.eventtypeid = this.eventtype.id;
  } else if (this.type === 'Actor') {
    s.actorid = this.actor.id;
  } else if (this.type === 'BookingBranding') {
    s.bookingbrandingid = this.bookingbranding.id;
  } else if (this.type === 'OwnerBranding') {
    s.ownerbrandingid = this.ownerbranding.id;
  } else {
    s.sourceid = this.source.id;
  }

  return s;
};

TemplateContactMethodTriggerEventFilter.prototype.mutateResponse = function(entity) {
  if (entity.type === 'Actor') {
    this.actor = new (ActorInstance.call(this, entity.actor.type.toLowerCase()));
  }

  return this.mutateEntity(entity);
};

module.exports = TemplateContactMethodTriggerEventFilter;