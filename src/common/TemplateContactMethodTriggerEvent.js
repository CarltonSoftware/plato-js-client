var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var TriggerEvent = require('./TriggerEvent');
var OwnerBookingType = require('./OwnerBookingType');
var AgencyBookingType = require('./AgencyBookingType');
var EventType = require('./EventType');
var TemplateContactMethodTriggerEventFilter = require('./TemplateContactMethodTriggerEventFilter');
var Joi = require('joi');

function TemplateContactMethodTriggerEvent(id) {
  this.createPath = this.path = 'triggerevent';
  this.id = id;
  this.triggerevent = new TriggerEvent();
  this.eventtype = new EventType();
  this.ownerbookingtype = new OwnerBookingType();
  this.agencybookingtype = new AgencyBookingType();
  this.type = 'BookingDates';
  this.filters = new Collection({
    path: 'filter',
    object: TemplateContactMethodTriggerEventFilter,
    parent: this
  });

  this.validSchema = function() {
    var s = {
      type: Joi.string().required().label('type').allow(['BookingDates', 'OwnerBookingType', 'AgencyBookingType', 'EventType']),
      triggerevent: Joi.object().required().label('Trigger event'),
      sendonce: Joi.boolean().required().label('Send once?').description(
        'This will determine if the template can be sent once or more to the same contact'
      ),
      transferredfromdepositpaid: Joi.boolean().required().label('Do not send on booking transfer').description(
        'This will ensure that tabs doesn\'t send a this template for a transferred booking.'
      )
    };

    if (this.type === 'EventType') {
      s.eventtype = Joi.object().required().label('Event Type');
    } else if (this.type === 'OwnerBookingType') {
      s.ownerbookingtype = Joi.object().optional().label('Owner Booking Type');
    } else if (this.type === 'AgencyBookingType') {
      s.agencybookingtype = Joi.object().optional().label('Agency Booking Type');
    } else {
      s.bookedfromdate = Joi.date().required().label('Booking From Date');
      s.bookedtodate = Joi.date().required().label('Booking To Date');
      s.holidayfromdate = Joi.date().required().label('Holiday From Date');
      s.holidaytodate = Joi.date().required().label('Holiday To Date');
    }

    //s.fromdate = Joi.date().required().label('from date').description('This is the start date of the period you want this configuration to be valid from.');
    //s.todate = Joi.date().required().label('to date').description('This is the end date of the period you want this configuration to be valid from.');
    //s.sendonce = Joi.boolean().required().label('send once');

    s.inactive = Joi.boolean().required().label('inactive').description('Inactive boolean. Also used to set this configuration\'s validity');

    return s;
  }.bind(this)
}

TemplateContactMethodTriggerEvent.prototype = new SingleEntity();

TemplateContactMethodTriggerEvent.prototype.toArray = function() {
  var s = {
    type: this.type,
    fromdate: this.fromdate || 'now',
    todate: this.todate || '+50 years',
    sendonce: this.sendonce || false,
    inactive: this.inactive || false,
    transferredfromdepositpaid: this.transferredfromdepositpaid || false,
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
  } else if (this.type === 'OwnerBookingType' && this.ownerbookingtype) {
    s.ownerbookingtypeid = this.ownerbookingtype.id;
  } else if (this.type === 'AgencyBookingType' && this.agencybookingtype) {
    s.agencybookingtypeid = this.agencybookingtype.id;
  }

  return s;
};

module.exports = TemplateContactMethodTriggerEvent;