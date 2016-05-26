var SingleEntity = require('./SingleEntity');

function TicketStatus(id) {
  this.path = 'ticketstatus';
  this.createPath = 'ticketstatus';
  this.id = id;
}
TicketStatus.prototype = new SingleEntity();
TicketStatus.prototype.toArray = function() {
  return {
    status: this.status
  };
};

module.exports = TicketStatus;
