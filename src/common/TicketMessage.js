var SingleEntity = require('./SingleEntity');

function TicketMessage(id) {
  this.path = 'message';
  this.createPath = 'message';
  this.id = id;
}

TicketMessage.prototype = new SingleEntity();
TicketMessage.prototype.toArray = function() {
  return {
    message: this.message
  };
};

module.exports = TicketMessage;
