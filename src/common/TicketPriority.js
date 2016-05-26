var SingleEntity = require('./SingleEntity');

function TicketPriority(id) {
  this.path = 'ticketpriority';
  this.createPath = 'ticketpriority';
  this.id = id;
}
TicketPriority.prototype = new SingleEntity();
TicketPriority.prototype.toArray = function() {
  return {
    priority: this.priority
  };
};

module.exports = TicketPriority;
