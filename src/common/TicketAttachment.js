var SingleEntity = require('./SingleEntity');

function TicketAttachment(ticketId, id) {
  this.path = 'ticket/' + ticketId + '/message';
  this.createPath = 'ticket/' + ticketId + '/message';
  this.id = id;
}
TicketAttachment.prototype = new SingleEntity();
TicketAttachment.prototype.toArray = function() {
  return {
    filename: this.filename
  };
};

module.exports = TicketAttachment;
