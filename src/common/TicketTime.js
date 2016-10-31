var SingleEntity = require('./SingleEntity');

function TicketTime(id) {
  this.path = 'tickettime';
  this.createPath = 'tickettime';
  this.id = id;
}
TicketTime.prototype = new SingleEntity();
TicketTime.prototype.toArray = function() {
  return {
    timetext: this.timetext,
    timeint: this.timeint
  };
};

module.exports = TicketTime;
