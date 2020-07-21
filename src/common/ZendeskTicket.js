var SingleEntity = require('./SingleEntity');

function ZendeskTicket(id) {
  this.path = this.createPath = 'zendeskticket';
  this.id = id;
}
ZendeskTicket.prototype = new SingleEntity();

module.exports = ZendeskTicket;