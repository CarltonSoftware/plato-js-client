var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var EntityLink = require('./EntityLink');

function EventLog(id) {
  this.createPath = this.path = 'eventlog';
  this.id = id;
  this.type = 'Booking';
  this.booking = new EntityLink({ entity: 'Booking' });
  this.property = new EntityLink({ entity: 'Property' });
  this.actor = new EntityLink({ entity: 'Customer' });

  this.validSchema = function() {
    var s = {
      eventtype: Joi.object().required().label('Event type')
    };

    if (this.type === 'Booking') {
      s.booking = Joi.object().required().label('Booking');
    } else if (this.type === 'Property') {
      s.property = Joi.object().required().label('Property');
    } else if (this.type === 'Actor') {
      s.actor = Joi.object().required().label('Actor');
    } else {
      s.type = Joi.any().required().label('Type').allow(['Booking', 'Property', 'Actor']);
    }

    return s;
  };
}

EventLog.prototype = new SingleEntity();

EventLog.prototype.toArray = function() {
  var s = {
    eventtypeid: this.eventtype.id,
    type: this.type
  };

  if (this.booking.id) {
    s.bookingid = this.booking.id;
  }

  if (this.property.id) {
    s.propertyid = this.property.id;
  }

  if (this.actor.id) {
    s.actorid = this.actor.id;
  }

  return s;
};

module.exports = EventLog;
