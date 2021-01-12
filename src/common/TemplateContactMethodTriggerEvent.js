var SingleEntity = require('./SingleEntity');
var TriggerEvent = require('./TriggerEvent');
var OwnerBookingType = require('./OwnerBookingType');
var AgencyBookingType = require('./AgencyBookingType');
var EventType = require('./EventType');
var Joi = require('joi');

function TemplateContactMethodTriggerEvent(id) {
  this.createPath = this.path = 'triggerevent';
  this.id = id;
  this.triggerevent = new TriggerEvent();
  this.eventtype = new EventType();
  this.ownerbookingtype = new OwnerBookingType();
  this.agencybookingtype = new AgencyBookingType();
  this.type = 'BookingDates';

  this.validSchema = function() {
    var s = {
      type: Joi.string().required().label('type').allow(['BookingDates', 'OwnerBookingType', 'AgencyBookingType', 'EventType']),
      triggerevent: Joi.object().required().label('Trigger event')
    };

    if (this.type === 'EventType') {
      s.eventtype = Joi.object().required().label('Event Type');
    } else if (this.type === 'OwnerBookingType') {
      s.ownerbookingtype = Joi.object().required().label('Owner Booking Type');
    } else if (this.type === 'AgencyBookingType') {
      s.agencybookingtype = Joi.object().required().label('Agency Booking Type');
    } else {
      s.bookedfromdate = Joi.date().required().label('Booking From Date');
      s.bookedtodate = Joi.date().required().label('Booking To Date');
      s.holidayfromdate = Joi.date().required().label('Holiday From Date');
      s.holidaytodate = Joi.date().required().label('Holiday To Date');
    }

    s.fromdate = Joi.date().required().label('from date').description('This is the start date of the period you want this configuration to be valid from.');
    s.todate = Joi.date().required().label('to date').description('This is the end date of the period you want this configuration to be valid from.');
    s.sendonce = Joi.boolean().required().label('send once');
    s.inactive = Joi.boolean().required().label('inactive').description('Inactive boolean. Also used to set this configuration\'s validity');

    return s;
  }.bind(this)
}

TemplateContactMethodTriggerEvent.prototype = new SingleEntity();

TemplateContactMethodTriggerEvent.prototype.toArray = function() {
  var s = {
    type: this.type,
    fromdate: this.fromdate,
    todate: this.todate,
    sendonce: this.sendonce,
    inactive: this.inactive,
    triggereventid: this.triggerevent.id
  };
  if (this.type === 'BookingDates') {
    s.bookedfromdate = this.bookedfromdate;
    s.bookedtodate = this.bookedtodate;
    s.holidayfromdate = this.holidayfromdate;
    s.holidaytodate = this.holidaytodate;
  } else if (this.type === 'BookingEvent') {
    s.bookingeventid = this.bookingevent.id;
  } else if (this.type === 'EventType') {
    s.eventtypeid = this.eventtype.id;
  } else if (this.type === 'OwnerBookingType') {
    s.ownerbookingtypeid = this.ownerbookingtype.id;
  } else if (this.type === 'AgencyBookingType') {
    s.agencybookingtypeid = this.agencybookingtype.id;
  }

  return s;
};

module.exports = TemplateContactMethodTriggerEvent;