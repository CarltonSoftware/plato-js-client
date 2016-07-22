var Entity = require('./Entity');

function TicketHistory(id) {
  this.path = 'history';
  this.createPath = 'history';
  this.id = id;
}
TicketHistory.prototype = new Entity();

module.exports = TicketHistory;
