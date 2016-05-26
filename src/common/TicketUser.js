var SingleEntity = require('./SingleEntity');

function TicketUser(id) {
  this.path = 'ticketuser';
  this.createPath = 'ticketuser';
  this.id = id;
}
TicketUser.prototype = new SingleEntity();
TicketUser.prototype.toArray = function() {
  return {
    username: this.username,
    fullname: this.fullname
  };
};

module.exports = TicketUser;
