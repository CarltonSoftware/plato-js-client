var SingleEntity = require('./SingleEntity');
var BookingEvent = require('./BookingEvent');

function SupplierServiceEvent(id) {
  this.path = 'bookingevent';
  this.createPath = 'bookingevent';
  this.id = id;
  this.event = new BookingEvent();
}
SupplierServiceEvent.prototype = new SingleEntity();

SupplierServiceEvent.prototype.toArray = function() {
  return {
    bookingeventid: this.event.id,
    action: this.action
  };
};

module.exports = SupplierServiceEvent;
