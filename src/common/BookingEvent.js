var SingleEntity = require('./SingleEntity');

function BookingEvent(id) {
  this.createPath = this.path = 'bookingevent';
  this.id = id;
}

BookingEvent.prototype = new SingleEntity();

BookingEvent.prototype.toArray = function() {
  return {
    event: this.event,
    description: this.description,
  };
};

module.exports = BookingEvent;
