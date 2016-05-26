var SingleEntity = require('./SingleEntity');

function TicketMessage(ticketId, id) {
  this.path = 'ticket/' + ticketId + '/message';
  this.createPath = 'ticket/' + ticketId + '/message';
  this.id = id;
}
TicketMessage.prototype = new SingleEntity();
TicketMessage.prototype.toArray = function() {
  return {
    tabs_user: this.tabs_user,
    message: this.message,
    createddate: this.createddate
  };
};

module.exports = TicketMessage;
