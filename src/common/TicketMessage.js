var SingleEntity = require('./SingleEntity');

function TicketMessage(ticketId, id) {
  this.path = 'ticket/' + ticketId + '/message';
  this.createPath = 'ticket/' + ticketId + '/message';
  this.id = id;
}
TicketMessage.prototype = new SingleEntity();
TicketMessage.prototype.toArray = function() {
  return {
    tabsuser: this.tabsuser,
    message: this.message,
    createddate: this.createddate
  };
};

module.exports = TicketMessage;
